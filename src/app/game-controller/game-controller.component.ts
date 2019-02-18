import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs';
import { Time } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  counterValue;
  constructor(private route:Router) {}
  ngOnInit() {}

  onIntervalFired(firedNumber : number){
    this.counterValue = firedNumber;
  }
  goToUsers(){
    this.route.navigate(['/users']);
  }
}
