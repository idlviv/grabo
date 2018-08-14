import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { config } from '../../../app.config';
import { DesignPopupComponent } from '../design-popup/design-popup.component';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { IRecommendation } from '../../../interfaces/interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  config = config;
  // gallery = [
  //   'catalog_residential',
  //   'catalog_semi_commercial',
  //   'catalog_commercial',
  //   'catalog_tile',
  //   'catalog_residential',
  //   'catalog_commercial',
  //   'catalog_tile',
  //   'catalog_semi_commercial',
  //   'catalog_residential',
  //   'catalog_tile',
  //   'catalog_semi_commercial',
  //   'catalog_commercial',
  // ];

  recommendations = <IRecommendation[]>config.recommendations;

  products: IProduct[];
  recomForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public media: ObservableMedia,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.recomForm = new FormGroup({
      recommendations: new FormControl([
      ])
    });
    console.log('rec', this.recommendations[0].sub[0]);

        this.recomForm.get('recommendations').setValue(this.recommendations[0].sub[0]);
        this.onSelectCategory({value: this.recommendations[0].sub[0]});

    // this.productService.getRecommendations()
    //   .subscribe(result => {
    //     // console.log('recommendations', result.data);
    //     this.recommendations = result.data;
    //     this.recomForm.get('recom').setValue(this.recommendations[0]);
    //     this.onSelectCategory({value: this.recommendations[0]});
    //   },
    //     err => console.log('error get recmmendations', err));
  }

  onSelectCategory(event) {
    const recommendation = event.value;
    // console.log('select', event.value);
    this.productService.getProductsByRecommendation(recommendation)
      .subscribe(result => {
          // console.log('products', result.data);
          this.products = result.data;
        },
        err => console.log('error get products by recmmendation', err));
  }

  openDialog(asset, title): void {
    const imageObject = {
      image: asset,
      cloudinaryOptionds: '/c_fill,w_1100,h_550,f_auto/',
      _id: title
    };

    const dialogRef = this.dialog.open(DesignPopupComponent, {
      // width: '400px',
      data: imageObject,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
          console.log('result popup', result);
        },
        err => console.log('err delete', err)
      );
  }

}
