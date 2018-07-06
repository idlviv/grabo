import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { IProduct } from '../../../interfaces/product-interface';
import { IDesign } from '../../../interfaces/interface';
import { ProductService } from '../../../services/product.service';
import { DesignService } from '../../../services/design.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-products-editor-form',
  templateUrl: './products-editor-form.component.html',
  styleUrls: ['./products-editor-form.component.scss']
})
export class ProductsEditorFormComponent implements OnInit {
  @ViewChild('f') productFormDirective: FormGroupDirective;
  config = config;
  productForm: FormGroup;
  processingLoadFile = false;
  editMode = false;
  edited_id: string;
  // design: IDesign;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private designService: DesignService,
  ) { }

  ngOnInit() {

    this.productForm = new FormGroup({
      _id: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(12),
      ]),
      structure: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required,
      ])
    });

    // this.route.paramMap
    //   .subscribe(paramMap => {
    //     if (paramMap.get('_id')) {
    //       // this.edited_id = paramMap.get('_id');
    //       // this.editMode = true;
    //
    //     }
    //   });


    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.edited_id = paramMap.get('_id');
        console.log('edited product _id', this.edited_id);

        if (!this.edited_id) {
          return of(null);
        }
        return this.productService.getProductById(this.edited_id);
      }),
    )

      .subscribe(result => {
        if (result) {
          // this.editMode = true;
          // console.log('true', result);
          // this.productForm.patchValue(result.data);
          // this.productForm.get('_id').disable();
        } else {
          console.log('false');
        }
      });
  }

  addPictures(event) {
    // this.processingLoadFile = true;
    // const file = event.target.files[0];
    // const checkFile = this.productService.checkFile(file);
    //
    // if (!checkFile.success) {
    //   this.matSnackBar.open(checkFile.message || 'Помилка', '',
    //     {duration: 3000, panelClass: 'snack-bar-danger'});
    //   this.processingLoadFile = false;
    //   if (!this.editMode) {
    //     this.productForm.get('_id').enable();
    //   }
    //   this.productForm.get('structure').enable();
    // } else {
    //
    //   // this.productForm.get('image').setValue(file);
    //   console.log('added file', this.productForm.get('image').value);
    //   this.designService.designAddImage(file, this.productForm.get('_id').value)
    //     .subscribe(result => {
    //         this.productForm.get('image').setValue(result.data);
    //         this.processingLoadFile = false;
    //         if (!this.editMode) {
    //           this.productForm.get('_id').enable();
    //         }
    //         this.productForm.get('structure').enable();
    //       },
    //       err => {
    //         this.matSnackBar.open(err.error || 'Помилка', '',
    //           {duration: 3000, panelClass: 'snack-bar-danger'});
    //         this.processingLoadFile = false;
    //         if (!this.editMode) {
    //           this.productForm.get('_id').enable();
    //         }
    //         this.productForm.get('structure').enable();
    //       }
    //     );
    // }
  }

  onProductFormSubmit() {
    // this.product = <IDesign>{
    //   _id: this.productForm.getRawValue()._id, // raw because may be disabled
    //   image: this.productForm.get('image').value,
    //   structure: this.productForm.get('structure').value,
    // };
    //
    // console.log('design form submit', this.design);
    // this.designService.designUpsert(this.design)
    //   .subscribe(result => {
    //       this.matSnackBar.open(result.message, '',
    //         {duration: 3000});
    //       this.resetForm();
    //       if (this.editMode) {
    //         this.goBack();
    //       }
    //     },
    //     err => this.matSnackBar.open(err.error, '',
    //       {duration: 3000, panelClass: 'snack-bar-danger'})
    //   );
  }

  resetForm() {
    this.productFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

}
