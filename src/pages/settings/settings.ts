import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city:string;
  ///This property is bound with ngModel to text input field city in the html
  state:string;
  ///This property is bound with ngModel to text input field state in the html
  lat:string;
  lon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.storage.get('location').then((val)=> {
      if (val!=null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      }
      else {
        this.city = 'West Hartford';
        this.state = 'US';
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    ///todo fix
    ///this function calls api twice on startup
    let location = {
      city: this.city,
      state: this.state
    }
    ///console.log(location);
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
