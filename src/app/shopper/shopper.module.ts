import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopperRoutingModule } from './shopper-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ShopperRoutingModule,
    SharedModule
  ],
  declarations: [ProductsComponent, ProductComponent]
})
export class ShopperModule { }
