import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopperRoutingModule } from './shopper-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ShopperRoutingModule,
    SharedModule
  ],
  declarations: [ProductsComponent]
})
export class ShopperModule { }
