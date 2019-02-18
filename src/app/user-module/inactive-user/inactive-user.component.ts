import { Component, OnInit } from '@angular/core';
import { ToggleUserService } from 'src/app/shared/services/toggle-user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  InactiveUserCollection :any = [];
  constructor(private toggleUser:ToggleUserService) { }
  ngOnInit() {
    this.InactiveUserCollection = this.toggleUser.getInactiveUsers();
  }
  ngDoCheck(){
    this.InactiveUserCollection = this.toggleUser.getInactiveUsers();
  }
  updateUserStatus(name, status){
    this.toggleUser.changeUsersStatus(name,status);
  }

}
