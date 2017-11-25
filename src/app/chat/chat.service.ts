import { Injectable } from '@angular/core';
import * as socketIO from 'socket.io-client';

@Injectable()
export class ChatService {
  //private _serverUrl: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  private _serverUrl: string = 'http://172.24.30.24:3000';
  private _server: any;
  private _user: string = '';
  private _loginTime: Date;

  constructor() {
    this._user = sessionStorage.getItem('user');

    if(!this._user)
      this.setNewUser();
    else
      this._loginTime = new Date(sessionStorage.getItem('loginTime'));

    this._server = socketIO(this._serverUrl);
  }

  public setNewUser(): void {
    this._user = prompt('Please enter your username:');
    if(!this._user)
      this._user = 'Mr. Anon McRandomson';
    sessionStorage.setItem('user', this._user);
    this._loginTime = new Date();
    sessionStorage.setItem('loginTime', this._loginTime.toUTCString());
  }

  get user(): string {
    return this._user;
  }

  get loginTime(): Date {
    return this._loginTime;
  }

  get server(): any {
    return this._server;
  }
}
