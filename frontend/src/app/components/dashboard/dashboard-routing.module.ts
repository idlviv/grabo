import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { DesignsEditorComponent } from './designs-editor/designs-editor.component';
import { AuthGuard } from '../../guards/auth.guard';
import { DesignsEditorFormComponent } from './designs-editor-form/designs-editor-form.component';
import { ProductsEditorComponent } from './products-editor/products-editor.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsEditorFormComponent } from './products-editor-form/products-editor-form.component';
import { ToolsComponent } from './tools/tools.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DesignsEditorComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: '',
        component: DashboardSidenavComponent,
        outlet: 'dashboardSidenav',
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'tools',
        component: ToolsComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'products_editor',
        component: ProductsEditorComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'products_editor_new/:parentCategory_id/:parentCategoryName',
        component: ProductsEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'products_editor_edit/:parentCategory_id/:parentCategoryName/:_id',
        component: ProductsEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'designs_editor',
        component: DesignsEditorComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'designs_editor_edit/:_id',
        component: DesignsEditorFormComponent,
        canActivate: [AuthGuard],
        data: { auth: 'manager' },
      },
      {
        path: 'designs_editor_new',
        component: DesignsEditorFormComponent,
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
