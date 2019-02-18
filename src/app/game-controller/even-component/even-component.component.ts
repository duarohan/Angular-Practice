import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-component',
  templateUrl: './even-component.component.html',
  styleUrls: ['./even-component.component.css']
})
export class EvenComponentComponent implements OnInit {
  interval : any;
  constructor() {}
  ngOnInit() {}
  startGame(){
      var i = 0;
      var numberComponent = [];
      this.interval = setInterval(function(){
      numberComponent.push(i+2);
    },1000)
  }
  stopGame(){
    clearInterval(this.interval)
  }
}
