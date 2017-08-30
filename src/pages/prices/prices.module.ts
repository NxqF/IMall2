import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PricesPage } from './prices';

@NgModule({
  declarations: [
    PricesPage,
  ],
  imports: [
    IonicPageModule.forChild(PricesPage),
  ],
  exports: [
    PricesPage
  ]
})
export class PricesPageModule {}
