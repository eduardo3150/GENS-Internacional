import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleNews page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-news',
  templateUrl: 'detalle-news.html'  
})
export class DetalleNews {
  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('items');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleNews');
  }

}
