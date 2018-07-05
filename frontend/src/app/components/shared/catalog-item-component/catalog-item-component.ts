import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item-component.html',
  styleUrls: ['./catalog-item-component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input() descendant;
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
