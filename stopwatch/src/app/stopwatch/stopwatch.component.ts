import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  counterRunning = false;
  currentTime = 0;

  onStartCounter() {
    this.counterRunning = true;
    setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
  }

}
