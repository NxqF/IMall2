import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'https://radiant-shore-81643.herokuapp.com/',
};

@Injectable()
export class AppSettings {

  constructor() {
  }

  public getApiUrl() {
    return CONFIG.apiUrl;
  }

}
