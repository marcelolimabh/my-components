import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter():Promise<any>{
//    return false;
    console.log('01 ionViewCanEnter called');
    return new Promise((resolve, reject) =>{
      console.log('Aguardando 2 segundos...');

      setTimeout(()=>{
        let num = Math.round(Math.random() * 100);
        if(num % 2 == 0){
          resolve();
          console.log(`${num} - Autorizado!`);
        }else{
          reject();
          console.log(`${num} - Não autorizado!`);
        }
      },2000);
    });
  }

  ionViewDidLoad() {
    console.log('02 ionViewDidLoad called');
  }

  ionViewWillEnter(){
    console.log('03 ionViewWillEnter called');
  }

  ionViewDidEnter(){
    console.log('04 ionViewDidEnter called');
  }

  ionViewCanLeave():boolean{
    console.log('05 ionViewCanLeave called');
    return true;
  }

  ionViewWillLeave() {
    console.log('06 ionViewWillLeave called');
  }

  ionViewDidLeave(){
    console.log('07 ionViewDidLeave called');
  }

  ionViewWillUnload(){
    console.log('08 ionViewWillUnload called');
  }


}
