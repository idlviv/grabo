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
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CloudinaryModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
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
    GalleryComponent,
    ContactsComponent,
    DownloadsComponent,
    InfoComponent,
  ],
})
export class SharedModule { }
