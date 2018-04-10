import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule }   from '@angular/forms';
import { CategoryComponent } from './category/category.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [NewProductComponent, CategoryComponent]
})
export class AdminModule { }
