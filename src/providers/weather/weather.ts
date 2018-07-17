import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  private apiKey = '03280758d083925391d8b5a357c1906d';
  private url;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather';
  }

  getWeather(city, state){
    return this.http.get(this.url + '?q=' + city + ',' + state + '&appid=' + this.apiKey);
  }

}
