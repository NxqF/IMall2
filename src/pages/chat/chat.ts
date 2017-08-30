import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';

import { ChatService, ChatMessage } from "../../providers/chat-service/chat-service";
import { NavigationService } from '../../providers/navigation-service/navigation-service';
import { ItemtypesService } from '../../providers/itemtypes-service/itemtypes-service';
import { UserstorageProvider } from '../../providers/userstorage/userstorage';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  msgList: ChatMessage[] = [];
  userId: string;
  userName: string;
  userImgUrl: string;
  toUserId: string;
  toUserName: string;
  toUserImgUrl: string;
  editorMsg: string = '';
  _isOpenEmojiPicker = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatService: ChatService,
    public events: Events,
    public ref: ChangeDetectorRef,
    public navigationService: NavigationService,
    public itemtypesService: ItemtypesService,
    public userstorage: UserstorageProvider,
  ) {
    this.setUser()
    this.getMsg()
  }

  setUser() {
    this.toUserId = '595b4c1cced06b3344741659'
    this.toUserName = 'admin'
    this.toUserImgUrl = './assets/to-user.jpg'
    var user = this.navParams.get('Account');
    if (!user) {
      var user = this.userstorage.getUser()
    }
    if (user) {
      this.userId = user._id;
      this.userName = user.userName;
      this.userImgUrl = user.userImgUrl;
    }
  }

  _focus() {
    this._isOpenEmojiPicker = false;

    this.content.resize();
    this.scrollToBottom()
  }

  switchEmojiPicker() {
    this._isOpenEmojiPicker = !this._isOpenEmojiPicker;

    if (!this._isOpenEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  getMsg() {
    this.chatService.getMsgList()
      .then(res => {
        this.msgList = res;
        this.scrollToBottom()
        this.filterMsg()
      })
      .catch(err => {
        console.log(err)
      })
  }

  fmsg

  filterMsg() {
    this.fmsg = []
    var list = this.msgList
    for (var x = 0; x < list.length; x++) {
      if ((list[x].userId == this.userId && list[x].toUserId == this.toUserId) || (list[x].userId == this.toUserId && list[x].toUserId == this.userId)) {
        this.fmsg.push(list[x])
      }
    }
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;
    var newMsg = {
      userId: this.userId,
      userName: this.userName,
      userImgUrl: this.userImgUrl,
      toUserId: this.toUserId,
      toUserName: this.toUserName,
      message: this.editorMsg
    }

    var userRole = this.navParams.get('userRole');
    if (userRole) {
      newMsg.userId = this.toUserId;
      newMsg.userName = this.toUserName;
      newMsg.userImgUrl = this.toUserImgUrl;
      newMsg.toUserId = this.userId;
      newMsg.toUserName = this.userName;
    }

    this.itemtypesService.addMessage(newMsg.message,
      newMsg.userId, newMsg.userName, newMsg.userImgUrl, newMsg.toUserId, newMsg.toUserName).subscribe(() => {
        this.getMsg()
      })
    this.scrollToBottom();
    this.editorMsg = '';
    if (!this._isOpenEmojiPicker) {
      this.messageInput.setFocus();
    }
  }


  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
}
