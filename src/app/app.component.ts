import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `
   
    <div style="text-align:left; font-family:Calibri;">
      <h1>
        Welcome to {{title}}!
      </h1>
      <h3>Current Weather is {{c_weather}} C (cached)</h3>
      <weather-widget [settings]="settings">Loading Weather</weather-widget>
       </div>

    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  results: string[];
  c_weather:string;
  constructor(private http: HttpClient) {}
  
   ngOnInit(): void {
    
     // Make the HTTP request:
     this.http.get('https://api.openweathermap.org/data/2.5/weather?APPID=9135891407cf348682e1695d3f28fabc&q=Muscat&units=metric&lang=en').subscribe(data => {
       // Read the result field from the JSON response.
       this.results = data['main'].temp;

       console.log(this.results);
       this.c_weather=this.results.toString();
       //this.zone.run(() =>  this.c_weather= this.results.toString())

     });
     
   }

   
  
  title = 'Muscat Weather';
  settings: WeatherSettings = {
    location: {
      cityName: 'Muscat'
    },
    backgroundColor: '#00acdc',
    color: '#ffffff',
   width: '95vw',
    height: 'auto',
  
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: true,
    showForecast: true,
    layout: WeatherLayout.NARROW,
    language: 'en'
  };

}
