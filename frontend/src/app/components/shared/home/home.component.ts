import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  products: IProduct[];

  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit() {
    this.productService.getMainPageProducts()
      .subscribe(
        result => this.products = result.data,
        err => console.log('mainPageProducts load error', err)
      );
  }
}
