import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { MessageBusService } from '../../common/message-bus.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {
  public user: string;
  public date: Date;

  constructor(private chatService: ChatService, private messageBus: MessageBusService) {
    this.user = this.chatService.user;
    this.date = this.chatService.loginTime;
    this.messageBus.subscribe(message => {
      if(message.key === 'user') {
        this.user = this.chatService.user;
        this.date = this.chatService.loginTime;
      }
    });
  }
}
