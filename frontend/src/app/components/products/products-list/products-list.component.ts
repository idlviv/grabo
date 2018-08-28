import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
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
  category_id: string;
  descendants: string;
  category: any;

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
        this.category_id = paramMap.get('category_id');
        // console.log('list this.category_id', this.category_id);
        if (!this.category_id) {
          return of(null);
        }
        return this.catalogService.getCategoryById(this.category_id);
      }),
      mergeMap(paramMap => {
        console.log('paramMap', paramMap);
        if (paramMap) {
          this.category = paramMap.data;
          return this.catalogService.getDescendants(this.category_id);
        } else {
          return this.catalogService.getDescendants('products');
        }
      }),
      mergeMap(result => {
        this.descendants = result.data;
        // console.log('des', this.descendants );
        // this.sharedService.sharingEvent(['category_id', this.category_id]);

        if (!this.descendants.length) {
          // this.sharedService.sharingEvent(['descendants', null]);
          // console.log('NOdescendants', this.descendants);
          return this.productService.getProductsByCategory(this.category_id, true);
        } else {
          // this.sharedService.sharingEvent(['descendants', this.descendants, 'category', this.category_id]);
          // console.log('YESdescendants', this.descendants);
          return this.productService.getProductsByCategory(null, true);
        }
      }))
      .subscribe(
        products => this.products = products.data,
        err => console.log('error', err)
      );
  }

}
