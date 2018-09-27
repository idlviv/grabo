import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product-interface';
import { config } from '../../../app.config';
import { CatalogService } from '../../../services/catalog.service';
import { ObservableMedia } from '@angular/flex-layout';
import * as aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('scrollPoint') scrollPoint: ElementRef;
  config = config;
  descendants: any;

  constructor(
    private catalogService: CatalogService,
    public media: ObservableMedia,
  ) { }

  ngOnInit() {
    aos.init();
    this.catalogService.getDescendants('products')
      .subscribe(
        result => {
          this.descendants = result.data;
        },
        err => console.log('mainPageProducts load error', err)
      );
  }

  onScroll() {
    this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
