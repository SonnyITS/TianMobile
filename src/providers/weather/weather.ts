import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  private _OWMApiKey = '03280758d083925391d8b5a357c1906d';
  private _darkSkyApiKey = '97ceea59f4c5d5f087145c99cc1ef9ee';
  private _OWMurl;
  private _darkSkyurl;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this._OWMurl = 'http://api.openweathermap.org/data/2.5/weather';
    this._darkSkyurl = 'http://api.darksky.net/forecast/'
  }

  getOWMWeather(city, state){
    return this.http.get(this._OWMurl + '?q=' + city + ',' + state + '&appid=' + this._OWMApiKey);
  }


  getDSWeather(lat, lon){
    return this.http.get(this._darkSkyurl + this._darkSkyApiKey + '/' + lat + ',' + lon);
    ///return this.http.get('https://api.darksky.net/forecast/97ceea59f4c5d5f087145c99cc1ef9ee/37.8267,-122.4233');
  }



}
