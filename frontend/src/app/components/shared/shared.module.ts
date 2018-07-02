import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page-404/page-404.component';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MessageComponent } from './message/message.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { RouterModule } from '@angular/router';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DesignItemComponent } from './design-item/design-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CloudinaryModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    MessageComponent,
    ProductItemComponent,
    DesignItemComponent,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    MessageComponent,
    ProductItemComponent,
    ConfirmPopupComponent,
    DesignItemComponent,
  ],
  // entryComponents: [
  //   ConfirmPopupComponent,
  // ]
})
export class SharedModule { }
