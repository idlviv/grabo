import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-design-item',
  templateUrl: './design-item.component.html',
  styleUrls: ['./design-item.component.scss']
})
export class DesignItemComponent implements OnInit {
  @Input() design;
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
