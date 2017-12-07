import { Component } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';

@Component({
  selector: 'app-root',
  template: `
   
    <div style="text-align:left">
      <h1>
        Welcome to {{title}}!
      </h1>
      <weather-widget [settings]="settings"></weather-widget>
       </div>

    
  `,
  styles: []
})
export class AppComponent {
  title = 'Muscat Weather';
  settings: WeatherSettings = {
    location: {
      cityName: 'Muscat'
    },
    backgroundColor: '#00acdc',
    color: '#ffffff',
   width: '80%',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: false,
    showForecast: true,
    layout: WeatherLayout.WIDE,
    language: 'en'
  };

}
