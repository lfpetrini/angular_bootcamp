import { Injectable } from '@angular/core';
import * as socketIO from 'socket.io-client';
import { MessageBusService } from '../common/message-bus.service';

@Injectable()
export class ChatService {
  private _serverUrl: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  //private _serverUrl: string = 'http://172.24.30.24:3000';
  private _server: any;
  private _user: string = null;
  private _loginTime: Date;

  constructor(private messageBus: MessageBusService) {
    this.startServer();
    this._user = sessionStorage.getItem('user');
    let loginTime = sessionStorage.getItem('loginTime');
    if(loginTime && this._user) {
      this._loginTime = new Date(loginTime);
    }
  }

  public startServer(): void {
    this._server = socketIO(this._serverUrl);
  }

  /**
   * Starts a session with a new username.
   * If the the parameter is null or empty, kills the session.
   * 
   * @param user username
   */
  public setNewUser(user: string): void {
    if(!user) {
      this._user = null;
      this._loginTime = null;
      sessionStorage.clear();
    }
    else {
      this._user = user;
      sessionStorage.setItem('user', this._user);
      this._loginTime = new Date();
      sessionStorage.setItem('loginTime', this._loginTime.toUTCString());
    }
    this.messageBus.sendMessage('user', user);
  }

  get user(): string {
    return this._user;
  }

  // set user(user: string) {
  //   this._user = user;
  // }

  get loginTime(): Date {
    return this._loginTime;
  }
  
  // set loginTime(loginTime: Date) {
  //   this._loginTime = loginTime;
  // }

  get server(): any {
    return this._server;
  }
}
