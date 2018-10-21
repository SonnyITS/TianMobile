import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;
  public Locations = [];

  city:string;
  state:string;
  lat:string;
  lon:string;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private alertController: AlertController, private storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openLocationAlert(){
    let addLocationAlert = this.alertController.create({

      title: "Add a Location",
      message: "Enter Your Location",
      inputs: [
        {
          type: "text",
          name: "addLocationInput"
        }
      ],

      buttons: [{
          text: "Cancel"
        },
        {
          text: "Add Location",
          handler: (inputData)=>{
          let LocationText;
          LocationText = inputData.addLocationInput;
          this.Locations.push(LocationText)
        }
        }
      ]
    });

    addLocationAlert.present();

  }


}
