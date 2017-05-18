import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleNews } from './detalle-news';

@NgModule({
  declarations: [
    DetalleNews,
  ],
  imports: [
    IonicPageModule.forChild(DetalleNews),
  ],
  exports: [
    DetalleNews
  ]
})
export class DetalleNewsModule {}
