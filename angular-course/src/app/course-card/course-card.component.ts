import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  title: string;
  public inputText: string;

  @Output()
  newTextChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTextChange(val: string) {
    this.newTextChange.emit(val)
    console.log("ON TEXT CHG: " + val);
  }

  textIsChanging(str: string) {
    console.log("in the actual change: " + str);
  }
}
