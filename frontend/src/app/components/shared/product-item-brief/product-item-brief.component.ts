import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-brief',
  templateUrl: './product-item-brief.component.html',
  styleUrls: ['./product-item-brief.component.scss']
})
export class ProductItemBriefComponent implements OnInit {
  @Input() product;
  @Input() category_id;

  constructor() { }

  ngOnInit() {
  }

}
