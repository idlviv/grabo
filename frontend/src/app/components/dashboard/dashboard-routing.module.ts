import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductCreateComponent } from './product-create/product-create.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from '../../guards/auth.guard';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProductCreateComponent,
      },
      {
        path: '',
        component: DashboardSidenavComponent,
        outlet: 'dashboardSidenav',
      },
      {
        path: 'product-create',
        component: ProductCreateComponent,
      },
      {
        path: 'product-edit/:_id',
        component: ProductCreateComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      dashboardRoutes
    )],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}
