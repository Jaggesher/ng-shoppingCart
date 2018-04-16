import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'AddProduct', component: NewProductComponent , canActivate:[AuthGuard]},
  { path: 'AddCategory', component: CategoryComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'shipment', component: ShipmentComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
