import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  onEmpty = true;
  output;
  constructor() {

   }

  ngOnInit() {
  }

  checkEmpty(input:string){
    if (input == ""){
      this.onEmpty =true;
      this.output ="";
    }else{
      this.onEmpty =false;  
    }
  }

  submit(input:string){
    this.output = `Yay we have entered ${input}`;
  }

}
