import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../_shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
      PagesComponent,
      AboutComponent,
      ContactUsComponent,
      HomeComponent,
      ServicesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot()
  ],
  providers: [],
})
export class PagesModule { }
