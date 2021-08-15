import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data'
import { CoursesService } from './courses/courses.service';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


    course1 = COURSES[0]
    course2 = COURSES[1]
    course3 = COURSES[2]
    description: string = ""

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector) {

    }

    ngOnInit() {

        // const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

        // customElements.define('course-title', htmlElement);

    }

    onChildTextChange(str: string) {
        console.log("got a new change: " + event);
        this.description = str

    }

    onEditCourse() {


    }

}
