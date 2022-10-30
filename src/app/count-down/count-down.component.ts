import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass']
})
export class CountDownComponent implements OnInit, OnDestroy {

  public subscription : Subscription | undefined;
  public now = new Date();
  public targetDate = new Date(Date.UTC(2022, 9, 30, 3, 30, 0));
  public timeDifference: number = 0;

  public secondsToTargetDate: number = 0;
  public minutesToTargetDate: number = 0;
  public hoursToTargetDate: number = 0;
  public daysToTargetDate: number = 0;

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  constructor() { }

  timeDiff() {
    this.timeDifference = this.targetDate.getTime() - new Date().getTime();
    console.log(this.timeDifference)
    this.allocateTimeUnits(this.timeDifference);
  }

  allocateTimeUnits(timeDiff: number) {
     this.secondsToTargetDate = Math.floor((timeDiff) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
     this.minutesToTargetDate = Math.floor((timeDiff) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
     this.hoursToTargetDate = Math.floor((timeDiff) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
     this.daysToTargetDate = Math.floor((timeDiff) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => { this.timeDiff(); });
  }

  ngOnDestroy() {

  }

}
