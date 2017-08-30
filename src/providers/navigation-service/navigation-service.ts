import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';
import { Events } from 'ionic-angular';


@Injectable()
export class NavigationService {

  constructor(
    public itemtypesService: ItemtypesService,
    private event: Events,
  ) {
    this.loadItemTypes()
    this.loadProductTypes()
    this.loadParams()
    this.loadPrices()
    this.loadAccounts()
    this.loadUserRoles()
    this.loadShopList()
    this.loadQuestions()
  }

  itemTypes
  productTypes
  params
  prices
  shopCart: Array<any> = []
  shopCartNum = 0
  totalPrice: number
  accounts
  userRole
  shopList
  User
  questions

  loadItemTypes() {
    this.itemtypesService.getItemTypes()
      .then(res => {
        this.itemTypes = res;
        this.event.publish('itemTypes', this.itemTypes)
      })
  }

  getItemTypes() {
    return this.itemTypes
  }

  loadProductTypes() {
    this.itemtypesService.getProductTypes()
      .then(res => {
        this.productTypes = res;
      })
  }

  getProductTypes() {
    return this.productTypes
  }

  loadParams() {
    this.itemtypesService.getParams()
      .then(res => {
        this.params = res;
      })
  }

  getParams() {
    this.loadParams()
    return this.params
  }

  loadPrices() {
    this.itemtypesService.getPrices()
      .then(res => {
        this.prices = res;
      })
  }

  getPrices() {
    return this.prices
  }

  loadShopCart(x) {
    this.shopCart.push(x)
    this.shopCartNum += 1
  }

  getShopCart() {
    return this.shopCart
  }

  deleteProduct(x) {
    this.shopCart.splice(x, 1)
    this.shopCartNum -= 1
  }

  clearProduct() {
    this.shopCart.splice(0, this.shopCart.length)
    this.shopCartNum = 0
  }

  getShopCartNum() {
    return this.shopCartNum
  }

  addTotalPrice() {
    this.totalPrice = 0
    for (var x = 0; x < this.shopCart.length; x++) {
      this.totalPrice += (this.shopCart[x].prices * this.shopCart[x].num)
    }
  }

  getTotalPrice() {
    this.addTotalPrice()
    return this.totalPrice
  }

  loadAccounts() {
    this.itemtypesService.getAccounts()
      .then(res => {
        this.accounts = res;
      })
  }

  getAccounts() {
    this.loadAccounts()
    return this.accounts
  }

  loadUserRoles() {
    this.itemtypesService.getUserRoles()
      .then(res => {
        this.userRole = res;
      })
  }

  getUserRoles() {
    return this.userRole
  }

  loadShopList() {
    this.shopList = this.itemtypesService.getShopList();
  }

  getShopList() {
    return this.shopList
  }

  loadQuestions() {
    this.itemtypesService.getQuestions()
      .then(res => {
        this.questions = res;
      })
  }

  getQuestions() {
    return this.questions
  }

}
