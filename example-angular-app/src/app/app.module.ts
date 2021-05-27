import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurSpecialSuperchargedComponentComponent } from './our-special-supercharged-component/our-special-supercharged-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OurSpecialSuperchargedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
