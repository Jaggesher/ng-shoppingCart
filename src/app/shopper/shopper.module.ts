import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopperRoutingModule } from './shopper-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ShopperRoutingModule
  ],
  declarations: [ProductsComponent]
})
export class ShopperModule { }
