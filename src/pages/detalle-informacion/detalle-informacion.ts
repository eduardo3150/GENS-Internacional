import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleInformacion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-informacion',
  templateUrl: 'detalle-informacion.html',
})
export class DetalleInformacion {
  item:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('items');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleInformacion');
  }

  

}
