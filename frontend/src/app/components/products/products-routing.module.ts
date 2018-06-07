import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductSidenavComponent } from './product-sidenav/product-sidenav.component';
// import { ProductComponent } from './product.component';

const productsRoutes: Routes = [
  // {
  //   path: 'cat',
  //   component: ProductComponent,
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: ProductListComponent,
  //     // },
  //     {
  //       path: ':category',
  //       component: ProductListComponent,
  //     },
  //     {
  //       path: ':category/:subcategory',
  //       component: ProductListComponent,
  //     },
  //     // {
  //     //   path: ':category',
  //     //   component: ProductSidenavComponent,
  //     //   outlet: 'productSidenav',
  //     // },
  //     // {
  //     //   path: ':category/:sub-category',
  //     //   component: ProductListComponent,
  //     //   children: [
  //     //     {
  //     //       path: '',
  //     //       component: ProductListComponent,
  //     //     },
  //     //     {
  //     //       path: '',
  //     //       component: ProductSidenavComponent,
  //     //       outlet: 'product-sidenav',
  //     //     },
  //     //   ]
  //     // },
  //   ]
  // }

];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}
