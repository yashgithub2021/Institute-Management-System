import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"];
  duration: string[] = ["1 Month", "2 Months", "3 Months", "6 Months",];
  id: any;
  courseObj: any

  constructor(private courseSer: CourseService, private route: Router, private _active: ActivatedRoute) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.courseSer.getsingleRec(this.id).subscribe((res) => {
        this.courseObj = { ...res }
      })

    })
  }

  editCourse(value: any) {
    const courseObj = {
      id: this.id,
      Course_Name: value.coursename,
      Duration: value.duration,
      Fees: value.fees

    }

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        this.courseSer.updateRecord(courseObj).subscribe(() => {
          this.route.navigate(['/course']);
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    })

  }

}
