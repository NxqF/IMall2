import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController
  ) {
  }

  color

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.onDidDismiss(
      data => {
        if (data != null) {
          this.color = data
        } 
      });
    popover.present({
      ev: myEvent
    });
  }

}
