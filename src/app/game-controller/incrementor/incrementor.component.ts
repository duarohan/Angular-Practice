import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent implements OnInit {
  interval;
  startCount = 0;
  @Output() numberFired = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}

  startGame(){
    this.interval = setInterval(() => {
      this.startCount++;
      this.numberFired.emit(this.startCount);
    },1000)
  }
  pauseGame(){
    clearInterval(this.interval);
    this.numberFired.emit(this.startCount);
  }
  stopGame(){
    clearInterval(this.interval);
    this.startCount = 0;
    this.numberFired.emit(this.startCount);
  }
}
