import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {
  public user: string;
  public date: Date;

  constructor(private chatService: ChatService) {
    this.user = this.chatService.user;
    this.date = this.chatService.loginTime;
  }
}
