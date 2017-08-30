import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppSettings } from '../providers/app-settings/app-settings';
import { ItemtypesService } from '../providers/itemtypes-service/itemtypes-service';

import { HttpModule} from '@angular/http';
import { NavigationService } from '../providers/navigation-service/navigation-service';
import { EmojiProvider } from '../providers/emoji/emoji';
import { UserstorageProvider } from '../providers/userstorage/userstorage';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettings,
    ItemtypesService,
    NavigationService, EmojiProvider, UserstorageProvider
  ]
})
export class AppModule {}
