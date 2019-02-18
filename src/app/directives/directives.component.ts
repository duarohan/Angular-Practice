import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayPara:boolean;
  logClicks = [];
  logSeq:number;
  fifthItemReached:boolean;
  constructor() { 
    this.displayPara=true;
    this.logSeq = 0;
  }

  ngOnInit() {
  }

  togglePara(){
    this.displayPara === false ? this.displayPara=true : this.displayPara=false;
    this.logClicks.push(Date.now());
    this.logSeq = this.logSeq + 1;
  }
}
