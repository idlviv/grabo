import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './components/shared/page-404/page-404.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  // {
  //   path: 'products',
  //   loadChildren: './components/product/product.module#ProductModule',
  //   // pathMatch: 'full'
  // },
  {
    path: 'common/products',
    loadChildren: './components/products/products.module#ProductsModule',
  },
  {
    path: 'blogs',
    component: Page404Component
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { auth: 'user' },
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  },

  { path: 'page-404', component: Page404Component },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  { path: '**', component: Page404Component }, // MAKE redirect
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
