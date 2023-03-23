import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchService } from 'src/app/shared/services/batch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"];
  duration: string[] = ["1Hr", "2Hrs", "3Hrs",];
  availability: string[] = ["AVAILABLE", "NOT AVAILABLE!"]

  constructor(private batchservice: BatchService, private route: Router) { }

  ngOnInit(): void {
  }

  addData(value: any) {
    const BatchObj = {
      Course_Name: value.coursename,
      Availability: value.available,
      Duration: value.duration,
      Timing: value.timing
    }


    Swal.fire(
      'Added!',
      'Your record has been added successfully!',
      'success'
    );
    this.batchservice.addRecord(BatchObj).subscribe(() => {
      this.route.navigate(['/batch'])
    })
  }


}
