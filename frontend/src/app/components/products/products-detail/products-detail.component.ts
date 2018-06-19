import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CatalogService } from '../../../services/catalog.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  category_id: string;
  product_id: string;
  product: any; // IProduct

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.category_id = paramMap.get('category_id');
        this.product_id = paramMap.get('product_id');
        return this.productService.getProductById(this.product_id);
      })
    )
      .subscribe(
        result => {
          this.product = result.data;
          console.log('detail product', this.product);
        }
      );
  }

}
