import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcartPage } from './shopcart';

@NgModule({
  declarations: [
    ShopcartPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcartPage),
  ],
  exports: [
    ShopcartPage
  ]
})
export class ShopcartPageModule {}
