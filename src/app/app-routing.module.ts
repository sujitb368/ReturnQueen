import { FaqComponent } from './Pages/faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponent/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

// import { AppComponent } from './app.component';

// import {Press} from '@Pages/press/press.component'
import { PressComponent } from './Pages/press/press.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PrivacyComponent } from './Pages/privacy/privacy.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { WorkWithUsComponent } from './Pages/work-with-us/work-with-us.component';

const routes: Routes = [ {path: "", component:HomeComponent},
                        {path: "press", component:PressComponent},
                        {path: "about-us", component:AboutUsComponent},
                        {path: "faq", component:FaqComponent},
                        {path: "contact", component:ContactComponent},
                        {path: "terms", component:TermsComponent},
                        {path: "privacy", component:PrivacyComponent},
                        {path: "work-with-us", component:WorkWithUsComponent},

                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
