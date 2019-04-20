import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-hidden',
  templateUrl: './ng-hidden.component.html',
  styleUrls: ['./ng-hidden.component.css']
})
export class NgHiddenComponent implements OnInit {
  courses = [];
  constructor() { }

  ngOnInit() {
  }

}
