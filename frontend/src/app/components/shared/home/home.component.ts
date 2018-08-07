import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product-interface';
import { config } from '../../../app.config';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
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
