import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularWeatherWidgetModule.forRoot({
      key: PUT_YOUR_API_KEY_HERE,
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'https://api.openweathermap.org/data/2.5'
    })
,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
