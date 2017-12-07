import { ChatService } from './chat.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('messageList') messageList: ElementRef;

  public autoScroll: boolean = true;

  public messages: any[] = [];
  public newMessage: string = '';

  constructor(private chatService: ChatService) {
    this.chatService.startServer();
    this.chatService.server.on('messages', message => {
      this.messages.push(message);
    });
  }

  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.chatService.server.emit('messages', {message: this.newMessage, author: this.chatService.user});
      this.newMessage = '';
    }
  }

  private scrollToBottom(): void {
    if(!this.autoScroll)
      return;
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch (err) {}
  }

  public keyUp(event: KeyboardEvent): void {
    if(!event.shiftKey && event.keyCode === 13) // ENTER
      this.sendMessage();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.scrollToBottom();
  }
}
