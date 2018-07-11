import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { IProduct } from '../../../interfaces/product-interface';
import { IDesign } from '../../../interfaces/interface';
import { ProductService } from '../../../services/product.service';
import { DesignService } from '../../../services/design.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';



@Component({
  selector: 'app-products-editor-form',
  templateUrl: './products-editor-form.component.html',
  styleUrls: ['./products-editor-form.component.scss']
})
export class ProductsEditorFormComponent implements OnInit {
  @ViewChild('f') productFormDirective: FormGroupDirective;
  // @ViewChild('inp') inputDirective;

  config = config;
  productForm: FormGroup;
  processingLoadAssets = -1;
  processingLoadTechAssets = -1;

  editMode = false;
  edited_id: string;
  parentCategory_id: string;
  parentCategoryName: string;
  designs: IDesign[];
  product: any;

  filteredDesigns: Observable<string[]>;
  options: string[] = ['4121-260', '4122-260'];
  designFilterValue: string;
  designValidity = false;

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
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      parent: new FormControl('', [
        Validators.required,
      ]),
      display: new FormControl('', [
        Validators.required,
      ]),
      order: new FormControl('', [
        Validators.required,
      ]),
      assets: new FormArray([]),
      techAssets: new FormArray([]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      recommendations: new FormArray([]),
      designs: new FormArray([]),
      des:  new FormControl('', [
        ])
    });

    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.edited_id = paramMap.get('_id');
        this.parentCategory_id = paramMap.get('parentCategory_id');
        this.parentCategoryName = paramMap.get('parentCategoryName');
        console.log('edited product _id', this.edited_id);
        console.log('edited parentCategory', this.parentCategory_id);
        console.log('edited parentCategoryName', this.parentCategoryName);
         if (!this.edited_id) {
          return of(null);
        }
        return this.productService.getProductById(this.edited_id);
      }),
    )
      .subscribe(result => {
        if (result) {
          this.editMode = true;
          // for (let i = 0; i < result.data.designs.length; i++) {
          //   this.addDesignsControl();
          // }
          for (let i = 0; i < result.data.recommendations.length; i++) {
            this.addRecommendationsControl();
          }
          for (let i = 0; i < result.data.assets.length; i++) {
            this.addAssetsControl();
          }
          for (let i = 0; i < result.data.techAssets.length; i++) {
            this.addTechAssetsControl();
          }
          this.productForm.patchValue(result.data);

          this.productForm.get('_id').disable();
        } else {
          console.log('false');
        }
      });

    this.designService.getDesigns()
      .subscribe(result => this.designs = result.data,
        err => console.log('Помилка завантеження дизайнів', err));

      this.filteredDesigns = this.productForm.get('des').valueChanges.pipe(
        startWith(''),
        map(value => {
          this.designValidity = this._checkDesignValidity(value);
          return this._filter(value);
        })
      );

      // this.filteredDesigns = this.productForm.get('des').valueChanges.pipe(
      //   startWith(''),
      //   map(value => this._filter(value))
      // );
  }

  private _filter(value: string): string[] {
    const filterValue = value;
    this.designFilterValue = value;
    return this.options.filter(option => option.indexOf(filterValue) === 0);
  }

  private _checkDesignValidity(value: string): boolean {
    console.log('check design validity');
    return this.options.indexOf(value) !== -1;
  }

  addDesign() {
    if (this._checkDesignValidity(this.productForm.get('des').value)) {
      console.log('add design true');
    } else {
      console.log('add design false');
    }
  }

  addAssets(event) {
    this.processingLoadAssets = this.productForm.get('assets').value.length;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadAssets = -1;
    } else {
      const filesLinks = this.productForm.get('assets').value;
      filesLinks.push(config.defaultProductImg);
      this.addAssetsControl();
      this.productForm.get('assets').setValue(filesLinks);
      this.productService.productAddAssets(file, this.productForm.get('_id').value)
        .subscribe(result => {
            filesLinks.pop();
            filesLinks.push(result.data);
            this.productForm.get('assets').setValue(filesLinks);
            this.processingLoadAssets = -1;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.removeAssetsControl(this.productForm.get('assets').value.length - 1);
            filesLinks.pop();
            this.processingLoadAssets = -1;
          }
        );
    }
  }

  addTechAssets(event) {
    this.processingLoadTechAssets = this.productForm.get('techAssets').value.length;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadTechAssets = -1;
    } else {
      const filesLinks = this.productForm.get('techAssets').value;
      filesLinks.push(config.defaultProductImg);
      this.addTechAssetsControl();
      this.productForm.get('techAssets').setValue(filesLinks);
      this.productService.productAddTechAssets(file, this.productForm.get('_id').value)
        .subscribe(result => {
            filesLinks.pop();
            filesLinks.push(result.data);
            this.productForm.get('techAssets').setValue(filesLinks);
            this.processingLoadTechAssets = -1;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.removeAssetsControl(this.productForm.get('techAssets').value.length - 1);
            filesLinks.pop();
            this.processingLoadTechAssets = -1;
          }
        );
    }
  }

  onProductFormSubmit() {
    this.product = {
      _id: this.productForm.getRawValue()._id, // raw because may be disabled
      name: this.productForm.get('name').value,
      parent: this.productForm.get('parent').value,
      display: this.productForm.get('display').value,
      order: this.productForm.get('order').value,
      assets: this.productForm.get('assets').value,
      techAssets: this.productForm.get('techAssets').value,
      description: this.productForm.get('description').value,
      recommendations: this.productForm.get('recommendations').value,
      designs: this.productForm.get('designs').value,
    };
    //
    console.log('productForm submit', this.product);
    this.productService.productUpsert(this.product)
      .subscribe(result => {
          this.matSnackBar.open(result.message, '',
            {duration: 3000});
          this.resetForm();
          if (this.editMode) {
            this.goBack();
          }
        },
        err => this.matSnackBar.open(err.error, '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

  resetForm() {
    this.productFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

  addAssetsControl() {
    const control = <FormArray>this.productForm.get('assets');
    control.push(this.initAssetsControl());
  }

  removeAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('assets');
    control.removeAt(i);
  }

  initAssetsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addTechAssetsControl() {
    const control = <FormArray>this.productForm.get('techAssets');
    control.push(this.initAssetsControl());
  }

  removeTechAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('techAssets');
    control.removeAt(i);
  }

  initTechAssetsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addRecommendationsControl() {
    const control = <FormArray>this.productForm.get('recommendations');
    control.push(this.initRecommendationsControl());
  }

  removeRecommendationsControl(i: number) {
    const control = <FormArray>this.productForm.get('recommendations');
    control.removeAt(i);
  }

  initRecommendationsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addDesignsControl() {
    const control = <FormArray>this.productForm.get('designs');
    control.push(this.initDesignsControl());
  }

  removeDesignsControl(i: number) {
    const control = <FormArray>this.productForm.get('designs');
    control.removeAt(i);
  }

  initDesignsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

}
