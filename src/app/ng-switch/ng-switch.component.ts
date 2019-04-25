import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent{
  constructor() { 
    $('.btn').css( 'cursor', 'pointer' );
  }
  viewMode = 'map';
}
