import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemtypesPage } from './itemtypes';

@NgModule({
  declarations: [
    ItemtypesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemtypesPage),
  ],
  exports: [
    ItemtypesPage
  ]
})
export class ItemtypesPageModule {}
