import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleInformacion } from './detalle-informacion';

@NgModule({
  declarations: [
    DetalleInformacion,
  ],
  imports: [
    IonicPageModule.forChild(DetalleInformacion),
  ],
  exports: [
    DetalleInformacion
  ]
})
export class DetalleInformacionModule {}
