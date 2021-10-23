import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrical',
  //selector: '[app-elecrtical]',
  //selector: '.app-electrical'
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Electrical Services';
  isUser: boolean= false;
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was Created! Server Name is: " + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log("Server Name: " + this.serverName);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUser(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName!=null && this.userName.length!=0){
      this.isUser = true;
    }else{
      this.isUser = false;
    }
  }
}
