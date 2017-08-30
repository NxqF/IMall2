import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { AppSettings } from '../app-settings/app-settings';

@Injectable()
export class ItemtypesService {

  apiUrl = this.appSettings.getApiUrl();

  constructor(
    public http: Http,
    public appSettings: AppSettings
  ) {
    console.log(this.apiUrl)
  }
  
  public getItemTypes() {
    return this.http.get(this.apiUrl + 'itemtypes')
      .toPromise()
      .then(response => response.json().result)
  }

  public getProductTypes() {
    return this.http.get(this.apiUrl + 'producttypes')
      .toPromise()
      .then(response => response.json().result)
  }

  public getParams() {
    return this.http.get(this.apiUrl + 'params')
      .toPromise()
      .then(response => response.json().result)
  }

  public getPrices() {
    return this.http.get(this.apiUrl + 'prices')
      .toPromise()
      .then(response => response.json().result)
  }

  public getAccounts() {
    return this.http.get(this.apiUrl + 'accounts')
      .toPromise()
      .then(response => response.json().result)
  }

  public addAccounts(newTodo1, newTodo2) {
    return this.http.post(this.apiUrl + 'accounts', { 'name': newTodo1, 'password': newTodo2 })
      .map(response => response.json());
  }

  public deleteAccounts(todoId) {
    return this.http.delete(this.apiUrl + 'accounts/' + todoId)
      .map(response => response.json());
  }

  public getUserRoles() {
    return this.http.get(this.apiUrl + 'users')
      .toPromise()
      .then(response => response.json().result)
  }

  public getShopList() {
    return this.http.get(this.apiUrl + 'shopList')
      .map(response => response.json().result);
  }

  public addToShopList(newTodo1, newTodo2, newTodo3) {
    return this.http.post(this.apiUrl + 'shopList', { 'userId': newTodo1, 'shoplist': newTodo2, 'totalprice': newTodo3 })
      .map(response => response.json());
  }

  public addMessage(newTodo1, newTodo2, newTodo3, newTodo4, newTodo5, newTodo6) {
    return this.http.post(this.apiUrl + 'message', {
      'message': newTodo1, 'userId': newTodo2,
      'userName': newTodo3, 'userImgUrl': newTodo4, 'toUserId': newTodo5, 'toUserName': newTodo6,
    })
      .map(response => response.json());
  }


  public getQuestions() {
    return this.http.get(this.apiUrl + 'questions')
      .toPromise()
      .then(response => response.json().result)
  }

}