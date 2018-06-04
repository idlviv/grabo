
import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { MatSnackBar } from '@angular/material';
import { IProduct } from '../../../interfaces/product-interface';
import { ProductService } from '../../../services/product.service';

import { ValidateService } from '../../../services/validate.service';
import { config } from '../../../app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productCreateForm: FormGroup;
  product: IProduct;
  categories: any;
  processingLoadFile = -1;
  defaultProductImgPath = config.defaultProductImgPath;
  editMode = false;
  edited_id: string;
  /**
   * directive for reset form (invalid status)
   */
  @ViewChild('f') productCreateFormDirective: FormGroupDirective;

  constructor(
    private catalogService: CatalogService,
    private productService: ProductService,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    this.productCreateForm = new FormGroup({
      categories : new FormArray([this.initCategories()]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(150),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
      ]),
      dimensions: new FormGroup({
        width: new FormControl('', [
          Validators.pattern('[0-9]+'),
          Validators.maxLength(3),
        ]),
        height: new FormControl('', [
          Validators.pattern('[0-9]+'),
          Validators.maxLength(3),
        ]),
      }),
      sku: new FormControl({value: '', disabled: false}, [
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ]+'),
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      price: new FormControl('', [
        Validators.pattern('^\\d*\\.?\\d+$'),
      ]),
      discount: new FormControl('', [
        Validators.pattern('^\\d*\\.?\\d+$'),
      ]),
      files: new FormArray([]),
      onMainPage: new FormControl('', [
        // Validators.required,
      ]),
    });

    this.catalogService.getAllDescendants('products', 0)
      .subscribe(categories => {
        this.categories = categories.data;
      },
        err => this.matSnackBar.open(err.error, '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );

    this.route.paramMap
      .subscribe(paramMap => {
        if (paramMap.get('_id')) {
          this.edited_id = paramMap.get('_id');
          this.editMode = true;

          this.productService.getProductById(this.edited_id)
            .subscribe(product => {

              for (let i = 1; i < product.data.categories.length; i++) {
                this.addCategory();
              }

              for (let i = 0; i < product.data.files.length; i++) {
                this.addFile();
              }

              this.productCreateForm.patchValue(product.data);

          },
            err => console.log('Помилка завантаження товару для редагування', err)
        )}
      });
  }

  resetForm() {
    if (this.productCreateFormDirective) {

      // enabling disabled fields
      this.productCreateForm.get('sku').enable();
      this.productCreateForm.get('categories')['controls'][0].enable();

      // deleting needless controls
      // categories controls array has one item on init
      for (let i = this.productCreateForm.get('categories')['controls'].length; i > 1 ; i--) {
        this.removeCategory(i - 1);
      }
      // files controls array don't has elems on init
      for (let i = this.productCreateForm.get('files')['controls'].length; i > 0 ; i--) {
        this.removeFile(i - 1);
      }
      this.productCreateFormDirective.resetForm();
    }
  }

  addPictures(event) {
      this.processingLoadFile = this.productCreateForm.get('files').value.length;
      const file = event.target.files[0];
      const checkFile = this.productService.checkFile(file);


      if (!checkFile.success) {
        this.matSnackBar.open(checkFile.message || 'Помилка', '',
          {duration: 3000, panelClass: 'snack-bar-danger'});
        this.processingLoadFile = -1;
      } else {
        const filesLinks = this.productCreateForm.get('files').value;
        filesLinks.push(config.defaultProductImgPath);
        this.addFile();
        this.productCreateForm.get('files').setValue(filesLinks);
        this.productService.productAddImage(file, this.productCreateForm.get('sku').value)
          .subscribe(result => {
              // this.previewProductImages.pop();
              filesLinks.pop();
              filesLinks.push(result.data);
              this.productCreateForm.get('files').setValue(filesLinks);
              console.log('this.productCreateForm.get(\'files\').value', this.productCreateForm.get('files').value);
              // this.previewProductImages = filesLinks;
              // console.log('this.previewProductImages', this.previewProductImages);
              console.log(result);
              this.processingLoadFile = -1;
            },
            err => {
              this.matSnackBar.open(err.error || 'Помилка', '',
                {duration: 3000, panelClass: 'snack-bar-danger'});
              this.removeFile(this.productCreateForm.get('files').value.length - 1);
              // this.previewProductImages.pop();
              filesLinks.pop();
              this.processingLoadFile = -1;

            }
          );
      }
  }

  onProductCreateSubmit() {
    // remove duplicates
    const uniqueCategories = [];
    this.productCreateForm.getRawValue().categories
      .forEach((item) => {
        if (uniqueCategories.indexOf(item) === -1) {
          uniqueCategories.push(item);
        }
    });

    this.product = <IProduct>{
      categories: uniqueCategories,
      sku: this.productCreateForm.getRawValue().sku, // raw because may be disabled
      name: this.productCreateForm.get('name').value,
      price: this.productCreateForm.get('price').value,
      discount: this.productCreateForm.get('discount').value,
      files : this.productCreateForm.get('files').value,
      description : this.productCreateForm.get('description').value,
      onMainPage: this.productCreateForm.get('onMainPage').value || false,
      dimensions: {
        width: this.productCreateForm.get('dimensions.width').value,
        height: this.productCreateForm.get('dimensions.height').value,
      }
    };

    if (this.editMode) {
      // edit
      this.product._id = this.edited_id;
      this.productService.productEdit(this.product)
        .subscribe(result => {
            this.matSnackBar.open(result.message, '',
              {duration: 3000});
            this.resetForm();
            this.editMode = false;
          },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
        );

    } else {
      this.productService.productCreate(this.product)
        .subscribe(result => {
            this.matSnackBar.open(result.message, '',
              {duration: 3000});
            this.resetForm();
          },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
        );
    }

  }

  onSelectCategory(event) {
    if (event.source.ngControl.name === '0') {this.createSku(event.value)}
  }

  createSku(category) {

    const getPrefix$ = this.catalogService.getPrefix(category);
    const getSkuList$ = this.productService.getSkuList(category);

    observableForkJoin(getPrefix$, getSkuList$).subscribe(result => {
      const prefix = result[0].data.prefix;
      const skuList = result[1].data
        .map(item => item.sku) // create [] from {}
        .filter(item => item.slice(0, 2) === prefix) // take elems with needed prefix
        .map(item => +item.slice(2)); // concat prefix, take only numbers

        console.log('skuList', skuList);
        let freeNumber = 1;
        for (let i = 0; i < skuList.length; i++) {
          if (skuList[i] - (i + 1) >= 1) {
            freeNumber = i + 1;
            break;
          }
          if (i === skuList.length - 1) {
            freeNumber = skuList.length + 1;
          }
        }
        let sku = freeNumber.toString();
        while (sku.length < 4) {
          sku = '0' + sku;
        }
        sku = prefix + sku;
        this.productCreateForm.patchValue({sku});
    },
          err => this.matSnackBar.open(err.error, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

  addCategory() {
    const control = <FormArray>this.productCreateForm.get('categories');
    control.push(this.initCategories());
  }

  removeCategory(i: number) {
    const control = <FormArray>this.productCreateForm.get('categories');
    control.removeAt(i);
  }

  initCategories() {
    return new FormControl('', [
        Validators.required,
      ])
    ;
  }

  addFile() {
    const control = <FormArray>this.productCreateForm.get('files');
    control.push(this.initFiles());
  }

  removeFile(i: number) {
    const control = <FormArray>this.productCreateForm.get('files');
    control.removeAt(i);
  }

  initFiles() {
    return new FormControl('file', [
        // Validators.required,
      ]);
  }
}
