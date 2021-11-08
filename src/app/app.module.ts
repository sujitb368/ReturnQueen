import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './myComponent/home/home.component';
import { RetunMobileViewComponent } from './myComponent/retun-mobile-view/retun-mobile-view.component';
import { ReturnDeskViewComponent } from './myComponent/return-desk-view/return-desk-view.component';
import { BuyFromCompaniesComponent } from './myComponent/buy-from-companies/buy-from-companies.component';
import { HowItWorkComponent } from './myComponent/how-it-work/how-it-work.component';
import { PlanComponent } from './myComponent/plan/plan.component';
import { ReturnFooterComponent } from './myComponent/return-footer/return-footer.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { PressComponent } from './Pages/press/press.component';
import { PressReleasesComponent } from './myComponent/press-releases/press-releases.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { SwiperModule } from 'swiper/angular';
import { FaqComponent } from './Pages/faq/faq.component';
import { ContactComponent } from './Pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RetunMobileViewComponent,
    ReturnDeskViewComponent,
    BuyFromCompaniesComponent,
    HowItWorkComponent,
    PlanComponent,
    ReturnFooterComponent,
    FooterComponent,
    PressComponent,
    PressReleasesComponent,
    AboutUsComponent,
    FaqComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
