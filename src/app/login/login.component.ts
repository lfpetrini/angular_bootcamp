import { Component } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;

  constructor(private chatService: ChatService, private router: Router) { }

  public login() : void {
    this.chatService.setNewUser(this.username.trim());
    this.router.navigate(['/chat']);
  }

  public keyUp(event: KeyboardEvent): void {
    if(event.keyCode === 13) // ENTER
      this.login();
  }
}
