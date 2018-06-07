import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';

const productsRoutes: Routes = [
  {
    path: ':category',
    component: ProductsListComponent,
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
