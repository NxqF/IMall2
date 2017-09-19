import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductInsPage } from './product-ins';

@NgModule({
  declarations: [
    ProductInsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductInsPage),
  ],
  exports: [
    ProductInsPage
  ]
})
export class ProductInsPageModule {}
