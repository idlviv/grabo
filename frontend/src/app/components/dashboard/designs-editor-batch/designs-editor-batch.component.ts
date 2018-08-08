import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DesignService } from '../../../services/design.service';
import { Location } from '@angular/common';
import { config } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { ProductService } from '../../../services/product.service';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

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
    this.processingLoadFile = true;
    const files = event.target.files;

    // take only supported files
    const filteredFiles = Array.prototype.filter.call(files, file => this.productService.checkFile(file).success);
    console.log('filteredFiles', filteredFiles);
    const $filteredFiles = from(filteredFiles);


    $filteredFiles.pipe(
      mergeMap(file => {
                        console.log('file', file);
                      // this.designForm.get('image').setValue(result.data);
                      return this.designService.designAddImagesBatch(file);
                    },
      )
    )
      .subscribe(
      result => {
        console.log('result batch from server', result);
        // this.designForm.get('image').setValue(result.data);
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
