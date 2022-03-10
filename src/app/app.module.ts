import { rootRouterConfig } from "./app.routes";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./navigation/menu/menu.component";
import { HomeComponent } from "./navigation/home/home.component";
import { FooterComponent } from "./navigation/footer/footer.component";
import { AboutComponent } from "./company/about/about.component";
import { ContactComponent } from "./company/contact/contact.component";
import { RouterModule } from "@angular/router";
import { DataBindingComponent } from "./demo/data-binding/data-binding.component";
import { ProductService } from "./products/product.service";
import { ProductListComponent } from './products/product-list/product-list.component';
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
