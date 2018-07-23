import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { IDesign } from '../../../interfaces/interface';
import { DesignService } from '../../../services/design.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product;
  @Input() category_id;
  config = config;
  designs: IDesign[];

  constructor(
    private designService: DesignService,

  ) { }

  ngOnInit() {
    this.designService.getDesigns()
      .subscribe(result => {
          this.designs = result.data;
        },
        err => console.log('Помилка завантеження дизайнів', err)
      );
  }

  // takes design object (from local designs array) by design_id
  getDesign(_id) {
    return this.designs.filter(design => design._id === _id)[0];
  }
}
