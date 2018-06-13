import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {
  @Input() descendant;
  constructor() { }

  ngOnInit() {
  }

}
