import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public users: any;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.connectionService.getUsers().subscribe( res => this.users = res , err => console.error(err)) ;
  }
}
