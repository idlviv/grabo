import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product;
  @Input() category_id;

  constructor() { }

  ngOnInit() {

  }

}
