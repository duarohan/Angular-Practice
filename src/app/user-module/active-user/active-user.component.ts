import { Component, OnInit } from '@angular/core';
import { ToggleUserService } from 'src/app/shared/services/toggle-user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  ActiveUserCollection : any= [];
  constructor(private toggleUser:ToggleUserService) { }
  ngOnInit() {
    this.ActiveUserCollection = this.toggleUser.getActiveUser();
  }
  ngDoCheck(){
    this.ActiveUserCollection = this.toggleUser.getActiveUser();
  }
  updateUserStatus(name, status){
    this.toggleUser.changeUsersStatus(name,status);
  }
}
