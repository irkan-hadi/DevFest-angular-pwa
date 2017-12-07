import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularWeatherWidgetModule.forRoot({
      key: '9135891407cf348682e1695d3f28fabc',
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    })
,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
