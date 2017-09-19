import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-itemtypes',
  templateUrl: 'itemtypes.html',
})
export class ItemtypesPage {

  itemTypes: Array<any>
  storeMsg
  
    constructor(
      public navCtrl: NavController,
      public navigationService: NavigationService,
      private event: Events,
    ) {
      this.loadItemTypes()
    }
  
    loadItemTypes() {
      this.navigationService.loadItemTypes()
      this.event.subscribe('itemTypes', (data) => {
        this.itemTypes = data
        this.storeMsg = this.itemTypes
      })
    }

    changeItemTypes(){
      this.itemTypes=this.storeMsg
    }
  
    goProductTypes(x) {
      this.navCtrl.push('ProducttypesPage', { 'x': x._id ,'name':x.name})
    }

    setItems(ev: any) {
      this.changeItemTypes()
  
      let val = ev.target.value;
  
      if (val && val.trim() != '') {
        this.itemTypes = this.itemTypes.filter(
          (item) => {
            return (
              item.name.toLowerCase().indexOf(
                val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(
                  val.toLowerCase()) > -1
            );
          })
      }
    }
  
    onSetItem(en) {
      this.setItems(en)
    }

}
