import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    CloudinaryModule,
    SharedModule,
  ],
  declarations: [ProductsListComponent]
})
export class ProductsModule { }
