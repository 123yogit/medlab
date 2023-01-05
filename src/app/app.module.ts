import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ViewProductDetailsCategoryComponent } from './view-product-details-category/view-product-details-category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
     FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    ViewProductDetailsComponent,
    ViewProductDetailsCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    LoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
