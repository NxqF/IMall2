import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDelPage } from './product-del';

@NgModule({
  declarations: [
    ProductDelPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDelPage),
  ],
  exports: [
    ProductDelPage
  ]
})
export class ProductDelPageModule {}
