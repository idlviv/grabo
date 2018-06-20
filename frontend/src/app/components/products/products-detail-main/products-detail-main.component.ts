import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-detail-main',
  templateUrl: './products-detail-main.component.html',
  styleUrls: ['./products-detail-main.component.scss']
})
export class ProductsDetailMainComponent implements OnInit {
  @Input() product;
  @Input() category_id;

  constructor() { }

  ngOnInit() {
  }

}
