import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { IProduct } from '../../../interfaces/product-interface';
import { IDesign } from '../../../interfaces/interface';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-designs-editor-form',
  templateUrl: './designs-editor-form.component.html',
  styleUrls: ['./designs-editor-form.component.scss']
})
export class DesignsEditorFormComponent implements OnInit {
  config = config;
  designForm: FormGroup;
  processingLoadFile = -1;
  editMode = false;
  edited_id: string;
  design: IDesign;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private productService: ProductService
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
      image: new FormControl('file', [
      ])
    });

    this.route.paramMap
      .subscribe(paramMap => {
        if (paramMap.get('_id')) {
          this.edited_id = paramMap.get('_id');
          this.editMode = true;
        }
      });
  }

  addPictures(event) {
    this.processingLoadFile = this.designForm.get('image').value.length;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadFile = -1;
    } else {

      this.designForm.get('image').setValue(file);
      console.log('added file', this.designForm.get('image').value);
      // this.productService.productAddImage(file, this.designForm.get('sku').value)
      //   .subscribe(result => {
      //       // this.previewProductImages.pop();
      //       filesLinks.pop();
      //       filesLinks.push(result.data);
      //       this.designForm.get('files').setValue(filesLinks);
      //       console.log('this.designForm.get(\'files\').value', this.designForm.get('files').value);
      //       // this.previewProductImages = filesLinks;
      //       // console.log('this.previewProductImages', this.previewProductImages);
      //       console.log(result);
      //       this.processingLoadFile = -1;
      //     },
      //     err => {
      //       this.matSnackBar.open(err.error || 'Помилка', '',
      //         {duration: 3000, panelClass: 'snack-bar-danger'});
      //       this.removeFile(this.designForm.get('files').value.length - 1);
      //       // this.previewProductImages.pop();
      //       filesLinks.pop();
      //       this.processingLoadFile = -1;
      //
      //     }
      //   );
    }
  }

  onDesignFormSubmit() {
    this.design = <IDesign>this.designForm.value;
    console.log('design form submit', this.design);

  }
}
