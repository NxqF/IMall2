import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserstorageProvider {

  user

  constructor(
    private storage: Storage,
    private event: Events
  ) {
  }

  saveUser(x) {
    this.storage.set('user', x)
    this.user = x
  }

  loadUser() {
    this.storage.get('user').then(
      (user) => {
        this.user = user;
      }
    );
  }

  getUser() {
    return this.user
  }

  clearUser() {
    this.storage.set('user', null)
    this.user = null
  }

}
