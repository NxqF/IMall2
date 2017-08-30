import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoplistPage } from './shoplist';

@NgModule({
  declarations: [
    ShoplistPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoplistPage),
  ],
  exports: [
    ShoplistPage
  ]
})
export class ShoplistPageModule {}
