import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DesignService } from '../../../services/design.service';
import { Location } from '@angular/common';
import { config } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../../../services/product.service';
import { mergeMap, filter, merge, } from 'rxjs/operators';
import { Observable, from, of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-designs-editor-batch',
  templateUrl: './designs-editor-batch.component.html',
  styleUrls: ['./designs-editor-batch.component.scss']
})
export class DesignsEditorBatchComponent implements OnInit {
  @ViewChild('f') designFormDirective: FormGroupDirective;
  config = config;
  designForm: FormGroup;
  processingLoadFile = false;
  rejectedFiles = [];
  designs = [];

  constructor(
    private designService: DesignService,
    private location: Location,
    private matSnackBar: MatSnackBar,
    private productService: ProductService,

  ) { }

  ngOnInit() {
    this.designForm = new FormGroup({
      structure: new FormControl('', [
        Validators.required,
      ]),
      images: new FormArray([]),
    });
  }

  addPictures(event) {
    const files: File[] = event.target.files;

    if (files.length > 50) {
      this.matSnackBar.open('Спробуйте вибрати менше ніж 50 файлів', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
      return;
    }

    this.processingLoadFile = true;
    this.designForm.get('structure').disable();

    const arrayOfObservables: Observable<any>[] = Array.prototype.map.call(files,
      res => of(res)
        .pipe(
          filter(file => {
            if (!this.productService.checkFile(file).success) {
              this.rejectedFiles.push(file);
              return false;
            } else {
              return true;
            }
          }),
          mergeMap(file => {
            console.log('mergemap');
            const design_id = file.name.slice(0, -4);
            // this.designForm.get('image').setValue(result.data);
            return this.designService.designAddImagesBatch(file, design_id, this.designForm.get('structure').value);
          }),
        )
    );


    // const $filteredFiles = $files.pipe(
    //   filter(file => {
    //     if (!this.productService.checkFile(file).success) {
    //       this.rejectedFiles.push(file);
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }),
    //   merge(file => {
    //     console.log('mergemap');
    //     const design_id = file.name.slice(0, -4);
    //        // this.designForm.get('image').setValue(result.data);
    //     return this.designService.designAddImage(file, design_id);
    //   }),
    //
    // )

    // $arrayOfObservables.pipe(
    //   filter(file => {
    //     if (!this.productService.checkFile(file).success) {
    //       this.rejectedFiles.push(file);
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }),
    //   merge(file => {
    //     console.log('mergemap');
    //     const design_id = file.name.slice(0, -4);
    //        // this.designForm.get('image').setValue(result.data);
    //     return this.designService.designAddImage(file, design_id);
    //   }),
    // )

      forkJoin(arrayOfObservables)
      .subscribe(
      result => {
        console.log('result batch from server', result);
        this.processingLoadFile = false;
        this.designForm.get('structure').enable();
        // this.designs.push(result.data);
      },
      err => {
        console.log('err', err);
        this.matSnackBar.open(err.error || 'Помилка', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
        this.processingLoadFile = false;
        this.designForm.get('structure').enable();
      });

    // if (!filteredFiles.length) {
    //   this.matSnackBar.open('Помилка вибору файлів (невірний тип, розмір, ..)', '',
    //     {duration: 3000, panelClass: 'snack-bar-danger'});
    //   this.processingLoadFile = false;
    //   this.designForm.get('structure').enable();
    // } else {
    //
    //     this.designService.designAddImagesBatch(filteredFiles)
    //           .subscribe(result => {
    //               console.log('result batch from server', result);
    //             // this.designForm.get('image').setValue(result.data);
    //             this.processingLoadFile = false;
    //           },
    //       err => console.log('add design service response err', err)
    //           );
    //
    // }

  }

  onDesignFormSubmit() {

  }

  resetForm() {
    this.designFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

    addDesignsControl() {
      const control = <FormArray>this.designForm.get('images');
      control.push(this.initDesignsControl());
    }

    removeDesignsControl(i: number) {
      const control = <FormArray>this.designForm.get('images');
      control.removeAt(i);
    }

    initDesignsControl() {
      return new FormControl('', [
        Validators.required,
      ]);
    }

}
