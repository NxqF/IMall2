import { Injectable } from '@angular/core';

const CONFIG = {
  // apiUrl: 'https://radiant-shore-81643.herokuapp.com/',
  apiUrl: 'http://s-378506.gotocdn.com:9445/',
};

@Injectable()
export class AppSettings {

  constructor() {
  }

  public getApiUrl() {
    return CONFIG.apiUrl;
  }

}
