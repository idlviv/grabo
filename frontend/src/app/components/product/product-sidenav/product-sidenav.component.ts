import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { SharedService } from '../../../services/shared.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-sidenav',
  templateUrl: './product-sidenav.component.html',
  styleUrls: ['./product-sidenav.component.scss']
})
export class ProductSidenavComponent implements OnInit {

  productSidenavItems: ICatalog;
  category: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        // console.log('paramMap', paramMap.get('category'));
        this.category = paramMap.get('category');
        return this.catalogService.getDescendants(paramMap.get('category'));
      })
    )

      .subscribe(subMenuItems => {
        if (!subMenuItems.data.length) {
          this.sharedService.sharingEvent('onNullSubcategory');
          this.sharedService.sharingEvent(['subMenuItems', null]);
          this.productSidenavItems = null;
        } else {
          // this.sharedService.sharingEvent('onNotNullSubcategory');
          this.sharedService.sharingEvent(['subMenuItems', subMenuItems.data]);
          this.productSidenavItems = subMenuItems.data;
          // console.log('product sidenav menuItems', subMenuItems);
        }
      });
  }
}
