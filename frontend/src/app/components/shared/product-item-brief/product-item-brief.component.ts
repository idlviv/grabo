import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-product-item-brief',
  templateUrl: './product-item-brief.component.html',
  styleUrls: ['./product-item-brief.component.scss']
})
export class ProductItemBriefComponent implements OnInit {
  @Input() product;
  @Input() category_id;
  @Input() parentCategory_id;
  @Input() parentCategoryName;
  @Input() descendant;

  config = config;

  constructor() { }

  ngOnInit() {
  }

}
