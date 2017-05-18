import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { UserService } from '../providers/user-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetalleInformacion } from '../pages/detalle-informacion/detalle-informacion';
import { ContactoPage } from '../pages/contacto-page/contacto-page';
import { NoticiasPage } from '../pages/noticias-page/noticias-page';
import { DetalleNews } from '../pages/detalle-news/detalle-news'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetalleInformacion,
    NoticiasPage,
    ContactoPage,
    DetalleNews
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetalleInformacion,
    NoticiasPage,
    ContactoPage,
    DetalleNews
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
