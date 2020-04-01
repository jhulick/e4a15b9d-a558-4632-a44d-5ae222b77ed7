import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {DateTime} from './dateTime.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateTimeObj: DateTime;
  date: string;
  year: string;

  error: any;

  constructor(
    private service: ApiService
  ) {}

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application
    this.service.getDateTimeAPI().subscribe(response => this.onSuccess(response), () => this.onError());
  }

  private onSuccess(result) {
    this.dateTimeObj = result;
    this.date = this.dateTimeObj.date;
    this.year = this.dateTimeObj.time;
  }

  private onError() {
    this.error = 'Failed to retrieve date/time';
  }

  getDateTime() {
    // service.
    // Use this function to parse the date returned by the API upon button click
    this.service.getDateTimeAPI().subscribe(response => this.onSuccess(response), () => this.onError());
  }
}
