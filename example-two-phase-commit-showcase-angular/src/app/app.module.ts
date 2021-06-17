import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurSpecialSuperchargedComponentComponent } from './our-special-supercharged-component/our-special-supercharged-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingTableComponent } from './booking-table/booking-table.component';


@NgModule({
  declarations: [
    AppComponent,
    OurSpecialSuperchargedComponentComponent,
    BookingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
