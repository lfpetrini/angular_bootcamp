import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnectionService {
  private restURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.restURL);
  }
}
