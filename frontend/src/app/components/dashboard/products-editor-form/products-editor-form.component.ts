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

// import {Observable} from 'rxjs';
// import {startWith, map} from 'rxjs/operators';
//
// export interface StateGroup {
//   letter: string;
//   names: string[];
// }

// export const _filter = (opt: string[], value: string): string[] => {
//   const filterValue = value.toLowerCase();
//
//   return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
// };

@Component({
  selector: 'app-products-editor-form',
  templateUrl: './products-editor-form.component.html',
  styleUrls: ['./products-editor-form.component.scss']
})
export class ProductsEditorFormComponent implements OnInit {
  @ViewChild('f') productFormDirective: FormGroupDirective;
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


  // stateForm: FormGroup = this.fb.group({
  //   stateGroup: '',
  // });
  //
  // stateGroups: StateGroup[] = [{
  //   letter: 'A',
  //   names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  // }, {
  //   letter: 'C',
  //   names: ['California', 'Colorado', 'Connecticut']
  // }, {
  //   letter: 'D',
  //   names: ['Delaware']
  // }, {
  //   letter: 'F',
  //   names: ['Florida']
  // }, {
  //   letter: 'G',
  //   names: ['Georgia']
  // }, {
  //   letter: 'H',
  //   names: ['Hawaii']
  // }, {
  //   letter: 'I',
  //   names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  // }, {
  //   letter: 'K',
  //   names: ['Kansas', 'Kentucky']
  // }, {
  //   letter: 'L',
  //   names: ['Louisiana']
  // }, {
  //   letter: 'M',
  //   names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
  //     'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  // }, {
  //   letter: 'N',
  //   names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  //     'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  // }, {
  //   letter: 'O',
  //   names: ['Ohio', 'Oklahoma', 'Oregon']
  // }, {
  //   letter: 'P',
  //   names: ['Pennsylvania']
  // }, {
  //   letter: 'R',
  //   names: ['Rhode Island']
  // }, {
  //   letter: 'S',
  //   names: ['South Carolina', 'South Dakota']
  // }, {
  //   letter: 'T',
  //   names: ['Tennessee', 'Texas']
  // }, {
  //   letter: 'U',
  //   names: ['Utah']
  // }, {
  //   letter: 'V',
  //   names: ['Vermont', 'Virginia']
  // }, {
  //   letter: 'W',
  //   names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  // }];
  //
  // stateGroupOptions: Observable<StateGroup[]>;

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
      parent: new FormControl('', [ // select
        Validators.required,
      ]),
      display: new FormControl('', [ // select
        Validators.required,
      ]),
      order: new FormControl('', [ // select
        Validators.required,
      ]),
      assets: new FormArray([]),
      techAssets: new FormArray([]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      recommendations: new FormArray([this.initRecommendationsControl()]),
      designs: new FormArray([this.initDesignsControl()]),
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
          console.log('true', result);
          for (let i = 0; i < result.data.assets.length; i++) {
            this.addAssetsControl();
          }
          console.log('result.data.techAssets.length', result.data.techAssets.length);
          for (let i = 0; i < result.data.techAssets.length; i++) {
            this.addTechAssetsControl();
          }
          this.productForm.patchValue(result.data);
          this.productForm.get('_id').disable();
        } else {
          console.log('false');
        }
      });

    // this.designService.getDesigns()
    //   .subscribe(result => this.designs = result.data,
    //     err => console.log('Помилка завантеження дизайнів', err));

    // this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filterGroup(value))
    //   );
  }

  // private _filterGroup(value: string): StateGroup[] {
  //   if (value) {
  //     return this.stateGroups
  //       .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
  //       .filter(group => group.names.length > 0);
  //   }
  //
  //   return this.stateGroups;
  // }

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
