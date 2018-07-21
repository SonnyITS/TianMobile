import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


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

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      city: 'Hartford',
      state: "US",
      lat: '41.7658',
      lon: '-72.6734'
    }

    
    this.weatherProvider.getOWMWeather(this.location.city, this.location.state).subscribe(weather => {
      console.log(weather);
      this.weather = weather;
      ///console.log(weather["main"]["temp"] + " F");
    })
    

    /*
    this.weatherProvider.getDSWeather(this.location.lat, this.location.lon).subscribe(weather => {
      console.log(weather);
      ///this.weather = weather;
      ///console.log(weather["main"]["temp"] + " F");
    })
    */

  }

  getFTemp(num){
    return ((num * (9/5)) - 459.67).toPrecision(3);
  }

  
}
