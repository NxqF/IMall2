import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import {ChatService} from "../../providers/chat-service/chat-service";
import {RelativeTime} from "../../shared/relative-time";
import {EmojiPickerComponentModule} from "../../components/emoji-picker/emoji-picker.module";
import {EmojiProvider} from "../../providers/emoji/emoji";

@NgModule({
  declarations: [
    ChatPage,
    RelativeTime
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(ChatPage),
  ],
  exports: [
    ChatPage
  ],
  providers:[
    ChatService,
    EmojiProvider
  ]
})
export class ChatModule {}
