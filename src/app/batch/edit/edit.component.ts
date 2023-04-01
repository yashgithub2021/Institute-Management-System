import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchService } from 'src/app/shared/services/batch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"];
  duration: string[] = ["1Hr", "2Hrs", "3Hrs",];
  availability: string[] = ["AVAILABLE", "NOT AVAILABLE!"]
  id: any;
  BatchObj: any

  constructor(private batchservice: BatchService, private route: Router, private _active: ActivatedRoute) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.batchservice.getsingleRec(this.id).subscribe((res) => {
        this.BatchObj = { ...res }
      })

    })
  }

  editBatch(value: any) {
    const BatchObj = {
      id: this.id,
      Course_Name: value.coursename,
      Availability: value.available,
      Duration: value.duration,
      Timing: value.timing

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
        this.batchservice.updateRecord(BatchObj).subscribe(() => {
          this.route.navigate(['/batch']);
        })

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    })

  }

}
