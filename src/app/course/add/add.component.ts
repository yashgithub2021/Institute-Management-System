import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"];
  duration: string[] = ["1 Month", "2 Months", "3 Months", "6 Months",]


  constructor(private courseSer: CourseService, private route: Router) { }

  ngOnInit(): void {
  }

  addData(value: any) {
    const courseObj = {
      Course_Name: value.coursename,
      Duration: value.duration,
      Fees: value.fees
    }


    Swal.fire(
      'Added!',
      'Your record has been added successfully!',
      'success'
    );
    this.courseSer.addRecord(courseObj).subscribe(() => {
      this.route.navigate(['/course'])
    })
  }


}
