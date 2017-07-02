import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { OpenmapWeatherService } from './openmap-weather.service';
import { WeatherListComponent } from './weather-list/weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule
  ],
  providers: [OpenmapWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
