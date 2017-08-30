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
        this.showToast('User was already exist')
        this.existing = true
      }
    }
  }

  onSignUp(value) {
    if (this.existing == false) {
      this.itemtypesService.addAccounts(value.name, value.password).subscribe(() => {
        this.showToast('User SignUp success')
        this.existing = true
        this.loadAccounts()
      })
    } else {
      this.showToast('User was already exist')
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
        this.showToast('User was unExist')
      }
    }
  }

  onlogIn(account) {
    if (this.unExisting == true) {
      this.showToast('User was unExist')
    } else if (this.unExisting == false) {
      for (var x = 0; x < this.accounts.length; x++) {
        if (account.name == this.accounts[x].name && account.password == this.accounts[x].password) {
          var user = this.setUser(this.accounts[x])
          this.userstorage.saveUser(user)
          this.viewCtrl.dismiss(this.accounts[x].name);
          break
        } else if (x == this.accounts.length - 1) {
          this.showToast('password was incorrect')
        }
      }
    }
  }

  setUser(userInfo){
    return userInfo
  }

  removeAccount(id) {
    for (var x = 0; x < this.accounts.length; x++) {
      if (id.name == this.accounts[x].name && id.password == this.accounts[x].password) {
        this.itemtypesService.deleteAccounts(this.accounts[x]._id).subscribe(() => {
          this.showToast('User was already delete')
        })
      } else if (x == this.accounts.length) {
        this.showToast('User was unExist')
      }
    }
  }

}