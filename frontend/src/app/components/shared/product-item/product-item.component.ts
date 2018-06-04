import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/product-interface';
import { config } from '../../../app.config';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user-interface';
import { ProductService } from '../../../services/product.service';
// import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { IConfirmPopupData } from '../../../interfaces/interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  defaultProductImgPath = config.defaultProductImgPath;
  @Input() product: IProduct;
  config = config;
  user: IUser;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.userService.getUserLocal()
      .subscribe(
        user => this.user = user
      );
  }

  onDelete(_id: string) {


    // console.log('delete _id', _id);

  }

  openDialog(confirmPopupData): void {

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '400px',
      data: confirmPopupData,
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        // if (result.data) {
          if (result && result.data.choice) {
            this.productService.productDelete(result.data._id)
              .subscribe(result => console.log('result delete', result),
                err => console.log('err delete', err)
              );
          }
        // }
        }

    );
  }


}
