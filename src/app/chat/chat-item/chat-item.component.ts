import { ChatService } from './../chat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {
  @Input() public message: any;

  constructor(private chatService: ChatService) {
  }

  public amITheAuthor(): boolean {
    return this.message.author === this.chatService.user;
  }
}
