import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  category_id: string;
  currentCategory: any;
  hierarchyCategory: any;
  product_id: string;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.category_id = paramMap.get('category_id');
        this.product_id = paramMap.get('product_id');

        console.log('bread this.category_id', this.category_id);
        console.log('bread this.product_id', this.product_id);
        if (!this.category_id) {
          return this.catalogService.getAllParents('products');
        }
          return this.catalogService.getAllParents(this.category_id);
      })
    ).subscribe(result => {
      console.log('result bread', result.data);
      // result.data[0].hierarchy to splice home => common => mainCategory
      // this.currentCategory =  result.data[0];
      this.hierarchyCategory = result.data[0].hierarchy;
      this.hierarchyCategory.push(result.data[0]);
      this.hierarchyCategory.splice(0, 3);
      console.log('hierarchyCategory', this.hierarchyCategory);

    });
  }

}
