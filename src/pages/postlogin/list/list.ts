import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HomePage } from '../../prelogin/home/home';
import { AlertPage } from '../alert/alert';



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

   event:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  onLogOut(){
    const actionSheets=this.actionSheetCtrl.create({
      buttons:[
        {
          text: 'Log Out',
          role: 'destructive',
          handler:()=>{
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    })
    actionSheets.present();
  }

  goToAlert(){
    this.navCtrl.push(AlertPage);
  }

  
  

}
