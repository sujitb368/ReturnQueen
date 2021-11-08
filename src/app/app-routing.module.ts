import { FaqComponent } from './Pages/faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './myComponent/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

// import { AppComponent } from './app.component';

// import {Press} from '@Pages/press/press.component'
import { PressComponent } from './Pages/press/press.component';

const routes: Routes = [ {path: "", component:HomeComponent},
                        {path: "press", component:PressComponent},
                        {path: "about-us", component:AboutUsComponent},
                        {path: "faq", component:FaqComponent},

                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
