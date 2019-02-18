import { Component, OnInit } from '@angular/core';
import { ToggleUserService } from '../shared/services/toggle-user.service';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css'],
  providers:[ToggleUserService]
})
export class UserModuleComponent implements OnInit {

  constructor(private toggleUser:ToggleUserService) { }

  ngOnInit() { 
  }
  

}
