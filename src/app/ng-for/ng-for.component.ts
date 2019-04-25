import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  courses

  loadCourses(){
    this.courses=[
      {id:1,name:'Javaee'},
      {id:2,name:'Javase'},
      {id:3,name:'Jquery'},
      {id:4,name:'Python'}
    ];
  }

  remove(course){
    this.courses.splice(course,1);
  }

  trackCourse(course){
    return course?course.id:undefined;
  }
}
