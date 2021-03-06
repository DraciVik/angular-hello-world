import { Component, OnInit } from '@angular/core';

@Component({
  // selector: `[app-servers]`,
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  username = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    const paragraph = document.querySelector('p');
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;

    paragraph.innerText = this.serverCreationStatus;
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
  onResetUsername() {
    this.username = '';
  }
}
