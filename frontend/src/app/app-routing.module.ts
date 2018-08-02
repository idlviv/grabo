import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './components/shared/page-404/page-404.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import { GalleryComponent } from './components/shared/gallery/gallery.component';

const appRoutes: Routes = [
  // {
  //   path: 'products',
  //   loadChildren: './components/product/product.module#ProductModule',
  //   // pathMatch: 'full'
  // },
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
    // pathMatch: 'full'
  },
  {
    path: 'gallery/ch',
    component: GalleryComponent
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
  {
    path: 'feedback',
    component: FeedbackComponent
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
