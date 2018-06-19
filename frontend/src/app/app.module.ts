import {config} from './app.config';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { ValidateService } from './services/validate.service';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { CatalogService } from './services/catalog.service';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';

import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConfirmPopupComponent } from './components/shared/confirm-popup/confirm-popup.component';

const cloudinaryLib = {
  Cloudinary: Cloudinary
};
const cloudinaryCloudName = config.cloudinary.cloud_name;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    CloudinaryModule.forRoot(cloudinaryLib, {cloud_name: cloudinaryCloudName}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    ValidateService,
    UserService,
    MessageService,
    RecaptchaModule,
    RecaptchaFormsModule,
    CatalogService,
    ProductService,
    SharedService,
    AuthGuard,
  ],
  exports: [
  ],
  entryComponents: [
    ConfirmPopupComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
