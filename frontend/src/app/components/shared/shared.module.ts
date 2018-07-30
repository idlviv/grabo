import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Page404Component } from './page-404/page-404.component';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from './home/home.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { RouterModule } from '@angular/router';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DesignItemComponent } from './design-item/design-item.component';
import { ProductItemBriefComponent } from './product-item-brief/product-item-brief.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { DesignPopupComponent } from './design-popup/design-popup.component';
import { CrslComponent } from './crsl/crsl.component';
import { FeedbackComponent } from './feedback/feedback.component';

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
    DesignItemComponent,
    ProductItemBriefComponent,
    ProductItemDetailComponent,
    CrslComponent,
    FeedbackComponent,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    Page404Component,
    HomeComponent,
    ConfirmPopupComponent,
    DesignItemComponent,
    ProductItemBriefComponent,
    ProductItemDetailComponent,
    DesignPopupComponent,
    CrslComponent,
    FeedbackComponent,
  ],
})
export class SharedModule { }
