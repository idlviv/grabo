import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  category: string;
  subcategory: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(
    //     paramMap => console.log(paramMap.get('category'))
    //   );

    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.category = paramMap.get('category');
        // this.subcategory = paramMap.get('subcategory');
        // this.itemsToShow = paramMap.get('category');
        if (!this.category) {
          this.category = 'products';
        }
        console.log('this.category', this.category);
        return this.catalogService.getDescendants(this.category);
      }),
      mergeMap(subCategoryItems => {
        console.log('subCategoryItems', subCategoryItems);
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
  }

}
