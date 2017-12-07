import { ChatService } from './../chat/chat.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class ChatAuthService implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.chatService.user)
      return true;
    this.router.navigate(['/login']);
    return false;
  }

  constructor(private router: Router, private chatService: ChatService) { }
}
