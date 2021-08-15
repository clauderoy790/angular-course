import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  @Input()
  cardId: number;

  public inputText: string;

  @Output()
  newTextChange: EventEmitter<string> = new EventEmitter<string>();

  @Output("courseViewClick")
  clickEmitter: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  cardClasses(): any {
    return {
      beginner: this.course.category == 'BEGINNER',
      another: false,
    }
  }

  isImageVisible(): boolean {
    if (this.course && this.course.iconUrl)
      return true;
    return false;
  }

  getStyles(): any {
    return {
      "text-decoration": "underline",
    }
  }

  onTextChange(val: string) {
    this.newTextChange.emit(val)
    console.log("ON TEXT CHG: " + val);
  }

  textIsChanging(str: string) {
    console.log("in the actual change: " + str);
  }

  courseClicked() {
    console.log("COURSE CLICKED: " + this.course.description);

    this.clickEmitter.emit(this.course)
  }
}
