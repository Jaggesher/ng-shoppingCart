import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { AdminService } from './Services/admin.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [NewProductComponent, CategoryComponent, SpinnerComponent],
  providers: [AdminService]
})
export class AdminModule { }
