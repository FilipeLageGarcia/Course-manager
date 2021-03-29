import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
            id: 1,
            name: 'Angular: Forms',
            imgUrl: '/assets/images/forms.png',
            price: 99.99,
            code: 'XPS-8796',
            duration: 120,
            rating: 4.5,
            releaseDate: ''

        },
        {
            id: 2,
            name: 'Angular: HTTP',
            imgUrl: '/assets/images/http.png',
            price: 49.99,
            code: 'LKL-1094',
            duration: 80,
            rating: 4,
            releaseDate: ''

        }
    ]

    
    }

}