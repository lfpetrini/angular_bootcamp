import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public users;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.connectionService.getUsers().subscribe( res => {
      console.log(res);
    });
  }
}
