import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  color

  sunMode() {
    this.color=''
    this.viewCtrl.dismiss(this.color);
  }
  nightMode(){
    this.color='bgr'
    this.viewCtrl.dismiss(this.color);
  }
}
