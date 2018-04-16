import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { AdminService } from './Services/admin.service';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ShipmentComponent } from './shipment/shipment.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [NewProductComponent, CategoryComponent, LoginComponent, ShipmentComponent],
  providers: [AdminService]
})
export class AdminModule { }
