import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { IDesign } from '../../../interfaces/interface';
import { DesignService } from '../../../services/design.service';
import { of } from 'rxjs/index';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { mergeMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DesignPopupComponent } from '../design-popup/design-popup.component';
import { ObservableMedia } from '@angular/flex-layout';


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
    public dialog: MatDialog,
    public media: ObservableMedia,
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

  openDialog(design): void {
    const dialogRef = this.dialog.open(DesignPopupComponent, {
      // width: '400px',
      data: design,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
          console.log('result popup', result);
        },
        err => console.log('err delete', err)
      );
  }
}
