import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ShipmentComponent } from './shipment/shipment.component';

const routes: Routes = [
  { path: 'AddProduct', component: NewProductComponent },
  { path: 'AddCategory', component: CategoryComponent },
  { path: 'login', component: LoginComponent},
  { path: 'shipment', component: ShipmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
