import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  
  location:{
    city: string,
    state: string,
    lat: string,
    lon: string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if (val != null){
        this.location = JSON.parse(val);
      }
      else{
        this.location = {
          city: 'Hartford',
          state: "US",
          lat: '41.7658',
          lon: '-72.6734'
        }
      }

      this.weatherProvider.getOWMWeather(this.location.city, this.location.state).subscribe(weather => {
        console.log(weather);
        this.weather = weather;
        ///console.log(weather["main"]["temp"] + " F");
      })
      
    })

    
    
    

    /*
    this.weatherProvider.getDSWeather(this.location.lat, this.location.lon).subscribe(weather => {
      console.log(weather);
      ///this.weather = weather;
      ///console.log(weather["main"]["temp"] + " F");
    })
    */

  }

  getTemp(){
    return this.convITemp(this.weather.main.temp);
  }

  getHighTemp(){
    return this.convITemp(this.weather.main.temp_max);
  }

  getLowTemp(){
    return this.convITemp(this.weather.main.temp_min);
  }

  getLocation(){
    return this.weather.name;
  }

  getDescription(){
    return this.weather.weather[0].description;
  }

  getHumidity(){
    return this.weather.main.humidity;
  }

  getPressure(){
    return this.weather.main.pressure;
  }

  getWind(){
    return this.convISpeed(this.weather.wind.speed)
    + ' (' + (this.weather.wind.deg).toPrecision(3) + ' deg)';
  }



  ///Input kelvin and returns Imperial F
  convITemp(num){
    return ((num * (9/5)) - 459.67).toPrecision(3);
  }

  ///Input Meters/Sec and returns Imperial MPH
  convISpeed(num){
    return (num * 2.2369).toPrecision(3) + ' mph';
  }

  ///Input compass heading and returns 
  convDirection(num){
    ///todo
  }

  ///getIconURL(){
  ///  return 'http://openweathermap.org/img/w/{{weather.weather[0].icon}}.png'
  ///}

  
}
