import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductSidenavComponent } from './product-sidenav/product-sidenav.component';
import { ProductComponent } from './product.component';
import { MaterialModule } from '../../material.module';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    CloudinaryModule,
    SharedModule,
  ],
  declarations: [ProductListComponent, ProductSidenavComponent, ProductComponent]
})
export class ProductModule { }
