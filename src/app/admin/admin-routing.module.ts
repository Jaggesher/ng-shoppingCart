import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
const routes: Routes = [
  {path: 'AddProduct' , component: NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
