import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tapped = 0;
  pressed = 0;
  constructor(public navCtrl: NavController) {

  }

  onDidReset(resetType: string){
    switch (resetType) {
      case 'tap':
        this.tapped =0;
        break;
      case 'press':
      this.pressed=0;
      break;

      default:
      this.pressed=0;
      this.tapped=0;
        break;
    }
  }

  onTap(){
    console.log('tapped');
    this.tapped++;
  }

  onPress(){
    console.log('press');
    this.pressed++;
  }

  onDidWin(){
    return this.tapped ==2 && this.pressed==4;
  }

  lifecycle(){
    this.navCtrl.push(LifecycleEventsPage).then((valor)=>{

      if(!valor){
        console.log('Acesso negado1', valor);
      }else{
        console.log('Page pushed');
      }
    }).catch(error =>{
      console.log('Acesso negado2', error);
    });
  }

}
