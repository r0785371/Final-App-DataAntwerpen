import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParkandrideService } from 'src/app/Services/parkandride.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkandrideListComponent } from './components/parkandride-list/parkandride-list.component';
import { ParkandridedetailsListComponent } from './components/parkandridedetails-list/parkandridedetails-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [ParkandrideService],
  bootstrap: [AppComponent],
})
export class AppModule {}
