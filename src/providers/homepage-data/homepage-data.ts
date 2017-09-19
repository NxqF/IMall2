import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomepageData {

  constructor(
    public http: Http
  ) {
  }

  /*静态数据*/
  page=[
    {_id:'59439f3e90de141c5cc1f90c',name:'手机数码'},
    {_id:'59439fd090de141c5cc1f90d',name:'电脑配件'},
    {_id:'59439fd590de141c5cc1f90e',name:'图书'},
    {_id:'59b24ef27fcc3b33207138f0',name:'美妆个护'},
    {_id:'59b251807fcc3b3320713b0c',name:'家用电器'},
    {productTypesId:'59b8fb7a8be525d78fadccdd'},
    {productTypesId:'59b8fe588be525d78fadced3'},
    {productTypesId:'59b536a68be525d78fad1381'},
    {productTypesId:'59b536a68be525d78fad1379'},
    {productTypesId:'59b90e038be525d78faddd25'},
    {productTypesId:'59b911268be525d78fade13c'},
    {productTypesId:'59b914358be525d78fade5ce'},
    {productTypesId:'59b915c28be525d78fade8bf'},
    {productTypesId:'59b916dc8be525d78fadeb03'},
    {productTypesId:'59b917ce8be525d78faded1e'},
    {productTypesId:'59b919aa8be525d78fadf1a0'},
    {productTypesId:'59b92a048be525d78fae1915'},
    {productTypesId:'59b536a68be525d78fad137d'},
    {productTypesId:'59b536a58be525d78fad1369'}
  ]

  slide = [
    {pic:'http://s-378506.gotocdn.com/pic/banner/gg5.jpg',id:'5'},
    {pic:'http://s-378506.gotocdn.com/pic/banner/gg10.jpg',id:'6'},
    {pic:'http://s-378506.gotocdn.com/pic/banner/gg11.jpg',id:'7'}
  ]

}
