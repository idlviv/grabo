import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { config } from '../../../app.config';
import { IDesign, IDesignPopUpData, IRecommendation } from '../../../interfaces/interface';
import { DesignService } from '../../../services/design.service';
import { of } from 'rxjs/index';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { mergeMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DesignPopupComponent } from '../design-popup/design-popup.component';
import { ObservableMedia } from '@angular/flex-layout';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})

export class ProductItemDetailComponent implements OnInit, OnChanges {
  @Input() product: IProduct;
  @Input() category_id;
  config = config;
  designs: IDesign[];
  recommendations: IRecommendation[];
  // panelOpenState = false;

  constructor(
    private designService: DesignService,
    public dialog: MatDialog,
    public media: ObservableMedia,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.designService.getDesigns()
      .subscribe(result => {
          this.designs = result.data;
        },
        err => console.log('Помилка завантеження дизайнів', err)
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    const productChange: SimpleChange = changes.product;
    // console.log('prev value: ', productChange.previousValue);
    // console.log('got name: ', productChange.currentValue);
    // console.log('productChange: ', productChange);
    if(productChange) {
      this.getRecommendations();
    }
  }

  getRecommendations() {
    // console.log('this.product', this.product);
    this.productService.getRecommendationsByIds(this.product.recommendations)
      .subscribe(result => {
          this.recommendations = result.data;
          // console.log('this.product', this.product.name);
          // console.log('this.product.recommendations', this.product.recommendations);
          // console.log('recommendations', this.recommendations);
        },
        err => console.log('Помилка завантеження рекомендацій', err)
      );
  }

  // takes design object (from local designs array) by design_id
  getDesign(_id) {
    return this.designs.filter(design => design._id === _id)[0];
  }

  openDialog(image, cloudinaryOptions, title): void {

    const imageObject = <IDesignPopUpData>{
      image,
      cloudinaryOptions,
      title
    };

    const dialogRef = this.dialog.open(DesignPopupComponent, {
      // height: '80vh',
      data: imageObject,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        },
        err => console.log('err delete', err)
      );
  }
}
