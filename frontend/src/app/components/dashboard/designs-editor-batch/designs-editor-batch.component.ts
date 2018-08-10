import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DesignService } from '../../../services/design.service';
import { Location } from '@angular/common';
import { config } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../../../services/product.service';
import { mergeMap, filter, merge, catchError } from 'rxjs/operators';
import { Observable, from, of, forkJoin, throwError } from 'rxjs';
import { IResponse } from '../../../interfaces/server-response-interface';
import { HttpErrorResponse } from '@angular/common/http';

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
  successFiles = [];
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
    });
  }

  addPictures(event) {
    this.rejectedFiles = [];
    this.successFiles = [];
    const files: File[] = event.target.files;

    if (files.length > 50) {
      this.matSnackBar.open('Спробуйте вибрати менше ніж 50 файлів', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
      return;
    }

    const filteredFiles = Array.prototype.filter.call(files, res => {
      if (this.productService.checkFile(res).success) {
        return true;
      } else {
        this.rejectedFiles.push('err');
        return false;
      }
    });

    if (this.rejectedFiles.length === files.length) {
      this.matSnackBar.open('Ці файли не підходять пол критеріях: тип та/або розір', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      return;
    }

    this.processingLoadFile = true;
    this.designForm.get('structure').disable();

    console.log('filteredFiles', filteredFiles);
    const arrayOfObservables: Observable<IResponse | HttpErrorResponse>[] = Array.prototype.map.call(filteredFiles,
      res => of(res)
        .pipe(
          // filter(file => {
          //   if (!this.productService.checkFile(file).success) {
          //     this.rejectedFiles.push(file);
          //
          //   } else {
          //     return true;
          //   }
          // }),
          mergeMap(file => {
            const design_id = file.name.slice(0, -4).trimEnd();
            // this.designForm.get('image').setValue(result.data);
            return this.designService.designAddImagesBatch(file, design_id, this.designForm.get('structure').value);
          }),
          catchError(error => of(error))
        )
    );

    console.log('arrayOfObservables', arrayOfObservables);
      forkJoin(arrayOfObservables)
      .subscribe(
      result => {
        console.log('result batch from server', result);
        this.processingLoadFile = false;
        this.designForm.get('structure').enable();
        result.forEach( res => {
          if (res instanceof  HttpErrorResponse) {
            this.rejectedFiles.push('err');
          } else {
            this.successFiles.push(res.data._id);
          }
        });
        console.log('rejectedFiles', this.rejectedFiles);
        console.log('successFiles', this.successFiles);
        this.resetForm();
      },
      err => {
        console.log('err', err);
        this.matSnackBar.open(err.error || 'Помилка', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
        this.resetForm();
        this.processingLoadFile = false;
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

    // addDesignsControl() {
    //   const control = <FormArray>this.designForm.get('images');
    //   control.push(this.initDesignsControl());
    // }
    //
    // removeDesignsControl(i: number) {
    //   const control = <FormArray>this.designForm.get('images');
    //   control.removeAt(i);
    // }
    //
    // initDesignsControl() {
    //   return new FormControl('', [
    //     Validators.required,
    //   ]);
    // }

}
