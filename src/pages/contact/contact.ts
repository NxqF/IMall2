import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { IonicPage, ModalController, ToastController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';

class UserInfo {
  userId: string;
  userName: string;
  userImgUrl: string;
}

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  userName = '请登录'
  user

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navigationService: NavigationService,
    public userstorage: UserstorageProvider,
    private toastCtrl: ToastController,
    private event: Events,
  ) {
    this.getUser()

  }

  ionViewDidEnter() {
    if (this.user) {
      this.userName = `HI,${this.user.name}`
    }
  }

  logIn() {
    let modal = this.modalCtrl.create('AccountPage');
    modal.onDidDismiss(
      data => {
        if (data != null) {
          this.userName = `HI,${data}`
          this.getUser()
        } else (
          this.userName = '请登录',
          this.clearUser(),
          this.getUser()
        )
      });
    modal.present();
  }

  askProblem() {
    let modal = this.modalCtrl.create('ProblemPage');
    modal.present();
  }

  showShopList() {

    var user = this.userstorage.getUser()
    if (!user) {
      this.logIn()
    } else {
      if (user.role == '5951c2b53afd231d8437173d') {
        let modal = this.modalCtrl.create('ShoplistPage');
        modal.present();
      } else if (user.role == '5951c3063afd231d8437173e') {
        let modal = this.modalCtrl.create('BuyerPage');
        modal.present();
      }
    }
  }

  getUser() {
    this.user = this.userstorage.getUser()
  }

  clearUser() {
    this.userstorage.clearUser()
  }

  askService() {
    var user = this.userstorage.getUser()
    if (!user) {
      this.logIn()
    } else {
      if (user.role == '5951c2b53afd231d8437173d') {
        let modal = this.modalCtrl.create('ChatPage');
        modal.present();
      } else if (user.role == '5951c3063afd231d8437173e') {
        let modal = this.modalCtrl.create('CustomerservicePage');
        modal.present();
      }
    }
  }

  pageUnBuild(){
    let toast = this.toastCtrl.create({
      message: '没有符合条件的订单',
      duration: 1000
    });
    toast.present();
  }

  showIntro(){
    let modal = this.modalCtrl.create('IntroPage');
    modal.present();
  }

  proEdit(){
    this.navCtrl.push('ProductInsPage')
  }

  proDel(){
    this.navCtrl.push('ProductDelPage')
  }
}
