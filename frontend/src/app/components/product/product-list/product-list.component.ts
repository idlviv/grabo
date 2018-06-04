import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { SharedService } from '../../../services/shared.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // itemsToShow: string;
  products: IProduct[];
  category: string;
  subcategory: string;
  // productSidenavItems: ICatalog;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
    private sharedService: SharedService,

  ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(paramMap => {
    //     const category = paramMap.get('category');
    //     const subcategory = paramMap.get('subcategory');
    //     // console.log('product params', paramMap.get('category'));
    //     // console.log('product params', paramMap.get('subcategory'));
    //     this.itemsToShow = paramMap.get('category');
    //     if (subcategory) {
    //       this.productService.getProducts(subcategory)
    //         .subscribe(
    //         products => this.products = products.data,
    //         err => console.log('error', err)
    //       );
    //       this.itemsToShow = this.itemsToShow + ' ' + paramMap.get('subcategory');
    //     } else {
    //       this.productService.getProducts(category)
    //         .subscribe(
    //           products => this.products = products.data,
    //           err => console.log('error', err)
    //         );
    //     }
    //
    //   });


    this.route.paramMap.pipe(
      mergeMap(paramMap => {
      this.category = paramMap.get('category');
      this.subcategory = paramMap.get('subcategory');
      // this.itemsToShow = paramMap.get('category');
      return this.catalogService.getDescendants(this.category);
    }),
      mergeMap(subCategoryItems => {
        if (!subCategoryItems.data.length) {
          // this.sharedService.sharingEvent('onNullSubcategory');
          this.sharedService.sharingEvent(['subCategoryItems', null]);
          // this.productSidenavItems = null;
        } else {
          // this.sharedService.sharingEvent('onNotNullSubcategory');
          this.sharedService.sharingEvent(['subCategoryItems', subCategoryItems.data, 'category', this.category]);
          // this.productSidenavItems = subCategoryItems.data;
          // console.log('product sidenav menuItems', subCategoryItems);
        }
        if (this.subcategory) {
          return this.productService.getProducts(this.subcategory);
        } else {
          return this.productService.getProducts(this.category);
        }
      }))

      .subscribe(
      products => this.products = products.data,
      err => console.log('error', err)
      );

        // if (subcategory) {
        //   this.productService.getProducts(subcategory)
        //
        //   this.itemsToShow = this.itemsToShow + ' ' + paramMap.get('subcategory');
        // } else {
        //   this.productService.getProducts(category)
        //     .subscribe(
        //       products => this.products = products.data,
        //       err => console.log('error', err)
        //     );
        // }

      // });
  }

}
