import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // any means any data type
  values: any;

  // inject a httpclient to be used lated in the class
  // iniated too early to get data from API
  constructor(private http: HttpClient) { }

  // occurs after the component is initialized, it happens after the constructor
  ngOnInit() {
    this.getValues();
  }

  getValues() {
    // Observable - a stream of data that is comming back from the server
    this.http.get('http://localhost:56002/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
