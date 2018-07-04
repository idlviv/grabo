import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { IProduct } from '../../../interfaces/product-interface';
import { IDesign } from '../../../interfaces/interface';
import { ProductService } from '../../../services/product.service';
import { DesignService } from '../../../services/design.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-designs-editor-form',
  templateUrl: './designs-editor-form.component.html',
  styleUrls: ['./designs-editor-form.component.scss']
})
export class DesignsEditorFormComponent implements OnInit {
  config = config;
  designForm: FormGroup;
  processingLoadFile = false;
  editMode = false;
  edited_id: string;
  design: IDesign;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private productService: ProductService,
    private designService: DesignService,
  ) { }

  ngOnInit() {

    this.designForm = new FormGroup({
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

    this.route.paramMap
      .subscribe(paramMap => {
        if (paramMap.get('_id')) {
          // this.edited_id = paramMap.get('_id');
          // this.editMode = true;

        }
      });


    this.route.paramMap.pipe(
      mergeMap(paramMap => {
          this.edited_id = paramMap.get('_id');
          console.log('edited design _id', this.edited_id);

          if (!this.edited_id) {
            return of(null);
          }
          return this.designService.getDesignById(this.edited_id);
        }),
      )

      .subscribe(result => {
        if (result) {
          // this.edited_id = paramMap.get('_id');
          this.editMode = true;
          console.log('true', result);
          this.designForm.patchValue(result.data);
        } else {
          console.log('false');
        }
      });
  }

  addPictures(event) {
    this.processingLoadFile = true;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadFile = false;
      this.designForm.get('_id').enable();
      this.designForm.get('structure').enable();
    } else {

      // this.designForm.get('image').setValue(file);
      console.log('added file', this.designForm.get('image').value);
      this.designService.designAddImage(file, this.designForm.get('_id').value)
        .subscribe(result => {
            this.designForm.get('image').setValue(result.data);
            this.processingLoadFile = false;
            this.designForm.get('_id').enable();
            this.designForm.get('structure').enable();
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.processingLoadFile = false;
            this.designForm.get('_id').enable();
            this.designForm.get('structure').enable();
          }
        );
    }
  }

  onDesignFormSubmit() {
    this.design = <IDesign>this.designForm.value;
    console.log('design form submit', this.design);
    this.designService.designUpsert(this.design)
      .subscribe(result => {
          this.matSnackBar.open(result.message, '',
            {duration: 3000});
          this.resetForm();
          console.log('designUpsert', result);
          // this.editMode = false;
        },
        err => this.matSnackBar.open(err.error, '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

  resetForm() {
    console.log('reset form');
  }

}
