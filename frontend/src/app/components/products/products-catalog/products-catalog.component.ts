import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';


@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent implements OnInit {
  @Input() descendant;
  config = config;

  constructor() { }

  ngOnInit() {
  }
}
