import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-brief',
  templateUrl: './products-brief.component.html',
  styleUrls: ['./products-brief.component.scss']
})
export class ProductsBriefComponent implements OnInit {
  @Input() product;
  @Input() category_id;

  constructor() { }

  ngOnInit() {
  }

}
