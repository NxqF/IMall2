import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  users = 'logIn'
  accounts = []
  userName
  password
  userRole
  existing: boolean
  unExisting: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
    public itemtypesService: ItemtypesService,
    public userstorage : UserstorageProvider,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController
  ) {
    this.loadAccounts()
    this.userRole = this.navigationService.getUserRoles()
  }

  loadAccounts() {
    this.accounts = this.navigationService.getAccounts()
  }

  showToast(value) {
    let toast = this.toastCtrl.create({
      message: value,
      duration: 1000
    });
    toast.present();
  }

  ifAccountExist(account) {
    this.loadAccounts()
    this.existing = false
    for (var x = 0; x < this.accounts.length; x++) {
      if (account.name == this.accounts[x].name) {
        this.showToast('用户名已被注册')
        this.existing = true
      }
    }
  }

  onSignUp(value) {
    if (this.existing == false) {
      this.itemtypesService.addAccounts(value.name, value.password).subscribe(() => {
        this.showToast('注册成功')
        this.existing = true
        this.loadAccounts()
      })
    } else {
      this.showToast('用户名已被注册')
    }
  }

  ifAccountUnExist(account) {
    this.loadAccounts()
    this.unExisting = false
    for (var x = 0; x < this.accounts.length; x++) {
      if (account.name == this.accounts[x].name)
      { break }
      else if (x == this.accounts.length - 1) {
        this.unExisting = true
        this.showToast('用户不存在')
      }
    }
  }

  onlogIn(account) {
    if (this.unExisting == true) {
      this.showToast('用户不存在')
    } else if (this.unExisting == false) {
      for (var x = 0; x < this.accounts.length; x++) {
        if (account.name == this.accounts[x].name && account.password == this.accounts[x].password) {
          var user = this.setUser(this.accounts[x])
          this.userstorage.saveUser(user)
          this.viewCtrl.dismiss(this.accounts[x].name);
          break
        } else if (x == this.accounts.length - 1) {
          this.showToast('密码错误')
        }
      }
    }
  }

  setUser(userInfo){
    return userInfo
  }

}