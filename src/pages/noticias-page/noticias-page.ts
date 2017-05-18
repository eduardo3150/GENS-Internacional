import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../providers/user-service';
import { DetalleNews } from "../detalle-news/detalle-news";

/**
 * Generated class for the NoticiasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-noticias-page',
  templateUrl: 'noticias-page.html',
  providers:[DetalleNews]
})
export class NoticiasPage {
  users: any[] = [];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.userService.load()
    .then(data =>{
      this.users = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  viewItem(items){
    this.navCtrl.push(DetalleNews,{
      items:items
    });
  }

}
