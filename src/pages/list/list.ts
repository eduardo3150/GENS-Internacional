import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contenido } from '../../app/contenido';
import { ContenidoService } from '../../app/contenido.service';
import { DetalleInformacion } from '../detalle-informacion/detalle-informacion';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[ContenidoService]
})
export class ListPage {
  items: any;
  contents: Contenido[];

  constructor(public navCtrl: NavController, private contenidoService:ContenidoService) {   
  }
  
  getContenido():void{
    this.contenidoService.getContenido().then(contents => this.contents = contents);
  }

  ngOnInit():void{
    this.getContenido();
  }

  viewItem(items){
    this.navCtrl.push(DetalleInformacion,{
      items:items
    });
  }

  }

  
  

