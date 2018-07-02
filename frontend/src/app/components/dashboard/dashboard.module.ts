import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material.module';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserModule } from '../user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { DesignsEditorComponent } from './designs-editor/designs-editor.component';
import { SharedModule } from '../shared/shared.module';
import { DesignsEditorFormComponent } from './designs-editor-form/designs-editor-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule,
    UserModule,
    CloudinaryModule,
    SharedModule,
  ],
  declarations: [ProductCreateComponent, DashboardComponent, DashboardSidenavComponent, ProductEditComponent, DesignsEditorComponent, DesignsEditorFormComponent]
})
export class DashboardModule { }
