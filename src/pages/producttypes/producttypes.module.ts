import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProducttypesPage } from './producttypes';
import { ProductTypeFilter } from '../../shared/producttype-filter.pipe';

@NgModule({
  declarations: [
    ProducttypesPage,
    ProductTypeFilter
  ],
  imports: [
    IonicPageModule.forChild(ProducttypesPage),
  ],
  exports: [
    ProducttypesPage
  ]
})
export class ProducttypesPageModule {}
