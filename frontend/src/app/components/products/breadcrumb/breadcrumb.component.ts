import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, of, merge } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  category_id: string;
  categoryName: string;
  currentCategory: any;
  hierarchyCategory: any;
  product_id: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const $paramMap = this.route.paramMap;
    const $queryParamMap = this.route.queryParamMap;

    merge(
      $paramMap
        .pipe(
        mergeMap(paramMap => {
          this.category_id = paramMap.get('category_id');
          console.log('bread this.category_id', this.category_id);
          if (!this.category_id) {
            return this.catalogService.getAllParents('products');
          }
          return this.catalogService.getAllParents(this.category_id);
        })
      )
      ,
      $queryParamMap
      //   .pipe(
      //   mergeMap(paramMap => {
      //     this.categoryName = paramMap.get('name');
      //     console.log('bread this.categoryName', this.categoryName);
      //     return of(this.categoryName);
      //   })
      // )
    )
      .subscribe(forkData => {
        console.log('forkData', typeof forkData);
      });




    ////////////////////////////

    // this.route.paramMap.pipe(
    //   mergeMap(paramMap => {
    //     this.category_id = paramMap.get('category_id');
    //     this.product_id = paramMap.get('product_id');
    //
    //     // const $getProduct = this.productService.getProductById(this.product_id);
    //
    //     console.log('bread this.category_id', this.category_id);
    //     console.log('bread this.product_id', this.product_id);
    //     if (!this.category_id) {
    //       return forkJoin(
    //         this.catalogService.getAllParents('products'),
    //         this.productService.getProductById(this.product_id)
    //       );
    //       // return this.catalogService.getAllParents('products');
    //     }
    //     return forkJoin(
    //       this.catalogService.getAllParents(this.category_id),
    //       this.productService.getProductById(this.product_id)
    //     );
    //   })
    // )
    //   .subscribe(result => {
    //       console.log('result bread hierarchy', result[0].data);
    //       console.log('result bread product', result[1].data);
    //       // result.data[0].hierarchy to splice home => common => mainCategory
    //       // this.currentCategory =  result.data[0];
    //       this.product = result[1].data;
    //       this.hierarchyCategory = result[0].data[0].hierarchy;
    //       this.hierarchyCategory.push(result[0].data[0]);
    //       this.hierarchyCategory.splice(0, 3);
    //       console.log('hierarchyCategory', this.hierarchyCategory);
    //
    //     },
    //     err => console.log('Помилка breadcrumb', err)
    //   );
  }

}
