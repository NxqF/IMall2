import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerservicePage } from './customerservice';
import { ItemTypeFilterPipe } from '../../shared/itemtype-filter.pipe';

@NgModule({
  declarations: [
    CustomerservicePage,
    ItemTypeFilterPipe
  ],
  imports: [
    IonicPageModule.forChild(CustomerservicePage),
  ],
  exports: [
    CustomerservicePage
  ]
})
export class CustomerservicePageModule {}
