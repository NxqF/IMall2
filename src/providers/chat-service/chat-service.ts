import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import { AppSettings } from '../app-settings/app-settings';

export class ChatMessage {
    userId: string;
    userName: string;
    userImgUrl: string;
    toUserId: string;
    message: string;
}

export class UserInfo {
    userId: string;
    userName: string;
    userImgUrl: string;
}

@Injectable()
export class ChatService {

    apiUrl = this.appSettings.getApiUrl();

    constructor(public http: Http, public events: Events,public appSettings: AppSettings) {
        
    }

    getMsgList(): Promise<ChatMessage[]> {

        return this.http.get(this.apiUrl + 'message')
            .toPromise()
            .then(response => response.json().result as ChatMessage[])
            .catch(err => Promise.reject(err || 'err'));
    }

}
