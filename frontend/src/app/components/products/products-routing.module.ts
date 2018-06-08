import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productsRoutes: Routes = [
  {
    path: ':category_id',
    component: ProductsListComponent,
  },
  {
    path: ':category_id/details/:product_id',
    component: ProductDetailsComponent,
  },
  {
    path: '',
    component: ProductsListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}
