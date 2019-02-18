import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleUserService {
  usersList  = [
                  { name : "Rohan", status : "Active",id : 1},
                  { name : "Swati", status : "Active",id : 2},
                  { name : "Amit", status : "Active", id : 3 },
                  { name : "Shivam", status : "Inactive",id : 4}
                ];
  
  constructor() { }
  
  changeUsersStatus(name:string, status:string){    
    if(status === "Active")
    {      
      var objIndex = this.usersList.findIndex((obj => obj.name === name));
      this.usersList[objIndex].status = "Inactive"; 
    }else{
      var objIndex = this.usersList.findIndex((obj => obj.name === name));
      this.usersList[objIndex].status = "Active";
    }
  }
  getActiveUser(){
    return this.usersList.filter(data => data.status === 'Active');
  }
  getInactiveUsers(){
    return this.usersList.filter(data => data.status === 'Inactive');
  }
}
