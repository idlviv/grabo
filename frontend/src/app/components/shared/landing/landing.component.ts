import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { config } from '../../../app.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  config = config;
  descendants: any;

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalogService.getDescendants('products')
      .subscribe(
        result => this.descendants = result.data,
        err => console.log('mainPageProducts load error', err)
      );
  }

}
