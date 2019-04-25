import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-travseral',
  templateUrl: './safe-travseral.component.html',
  styleUrls: ['./safe-travseral.component.css']
})
export class SafeTravseralComponent {
  constructor() { }
  task={
    title:'Review',
    assignee:{
      name:'Join Smith'
    }
  }
}
