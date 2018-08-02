import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { config } from '../../../app.config';
import { DesignPopupComponent } from '../design-popup/design-popup.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  config = config;
  gallery = [
    'catalog_residential',
    'catalog_semi_commercial',
    'catalog_commercial',
    'catalog_tile',    'catalog_residential',
    'catalog_semi_commercial',
    'catalog_commercial',
    'catalog_tile',
    'catalog_residential',
    'catalog_semi_commercial',
    'catalog_commercial',
    'catalog_tile',
  ];

  constructor(
    public dialog: MatDialog,
    public media: ObservableMedia,
  ) { }

  ngOnInit() {
  }

  // openDialog(design): void {
  //   const dialogRef = this.dialog.open(DesignPopupComponent, {
  //     // width: '400px',
  //     data: design,
  //     panelClass: 'custom-dialog-container'
  //   });
  //
  //   dialogRef.afterClosed()
  //     .subscribe(result => {
  //         console.log('result popup', result);
  //       },
  //       err => console.log('err delete', err)
  //     );
  // }

}
