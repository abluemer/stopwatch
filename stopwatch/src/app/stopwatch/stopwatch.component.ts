import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  counterRunning = false;
  currentTime = 0;

  counterInterval; any;

  onStartCounter() {
    this.counterRunning = true;
    this.counterInterval  = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  onStopCounter() {
    this.counterRunning = false;
    clearInterval(this.counterInterval);
  }

  constructor() { }

  ngOnInit() {
  }

}
