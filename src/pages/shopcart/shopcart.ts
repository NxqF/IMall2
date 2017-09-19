import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Content, Events } from 'ionic-angular';

import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';



@IonicPage()
@Component({
  selector: 'page-shopcart',
  templateUrl: 'shopcart.html',
})
export class ShopcartPage {


  @ViewChild(Content) content: Content;
  shopCart: Array<any>
  shopCartNum: number = 0
  totalPrice: number = 0

  prices: Array<any>
  priceSession
  priceLoadComplete
  priceNum = 10

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navigationService: NavigationService,
    public loadingCtrl: LoadingController,
    public itemtypesService: ItemtypesService,
    public userstorage: UserstorageProvider,
    private toastCtrl: ToastController,
    private event: Events,
  ) {
    // this.prices = this.navigationService.getPrices()
    this.loadPrices()
    
  }

  loadPrices() {
    this.navigationService.loadPrices()
    this.event.subscribe('prices', (data) => {
      this.prices = data
      this.priceSession = this.prices.slice(0,10)
    })
  }

  loadPrcieSession(){
    this.priceNum += 10
    this.priceSession = this.prices.slice(0,this.priceNum)
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.loadPrcieSession()
      infiniteScroll.complete();
    }, 500);
  }

  ionViewDidEnter(){
    this.scrollToTop()
  }

  ngDoCheck() {
    this.getShopCart()
    this.getShopCartNum()
    this.getTotalPrice()
  }

  getShopCart() {
    this.shopCart = this.navigationService.getShopCart()
  }

  getShopCartNum() {
    this.shopCartNum = this.navigationService.getShopCartNum()
  }

  getTotalPrice() {
    this.totalPrice = this.navigationService.getTotalPrice()
    this.totalPrice = Math.round(this.totalPrice)
  }

  deleteProduct(x) {
    this.navigationService.deleteProduct(x)
  }

  valueDefine(event, i) {
    if (event.target.value > 99) {
      this.shopCart[i].num = 100
    }
    if (event.target.value < 1) {
      this.shopCart[i].num = 1
    }
  }

  addToList() {
    var user = this.userstorage.getUser()
    if (!user) {
      let toast = this.toastCtrl.create({
        message: '请先登录',
        duration: 1000
      });
      toast.present();
      this.navCtrl.parent.select(2)
    } else {
      let loader = this.loadingCtrl.create({
        content: "添加至购物车...",
        duration: 500
      });
      loader.present();
      console.log(user._id, this.shopCart, this.totalPrice)
      this.addToShopList(user._id, this.shopCart, this.totalPrice)
      this.clearProduct()
    }
  }

  clearProduct() {
    var temp = this;
    setTimeout(function () {
      temp.navigationService.clearProduct()
    }, 1000);
  }

  addToShopList(userId, shoplist, totalprice) {
    this.itemtypesService.addToShopList(userId, shoplist, totalprice).subscribe()
  }

  goParams(x) {
    this.navCtrl.push('ParamsPage', { 'x': x });
  }

  scrollToTop() {
        this.content.scrollToTop();
  }
  
}
