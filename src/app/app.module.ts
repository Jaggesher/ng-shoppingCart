import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ShopperModule } from './shopper/shopper.module';
import { AdminModule } from './admin/admin.module';
import { CommonService } from './shared/services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopperModule,
    AdminModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
