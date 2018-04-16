import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopperRoutingModule } from './shopper-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShopperRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent, ProductComponent, CartComponent]
})
export class ShopperModule { }
