import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  id: any;
  empObj: any;
  qualification: string[] = ["SSC (10th)", "HSC (12th)", "BCA", "BSC", "B.Tech", "B.Com", "MCA", "MSC", "Other"];
  specialization: string[] = ["Science", "Computer Science", "Maths", "Other"];
  yearOfpass: number[] = [2018, 2019, 2020, 2021];
  experience: any[] = ["0-1 Year", "1-3 Years", "3-5 Years"];
  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"]
  isVisible: any;
  isSelected: boolean = true;
  batch = ["Morning", "Afternoon", "Evening"]


  spvisible: any;


  constructor(private _active: ActivatedRoute, private dbSer: DatabaseService, private route: Router) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.dbSer.getSingleRec(this.id).subscribe((res) => {
        this.empObj = { ...res }
      })
    })

  }

  editEmp(value: any) {
    const empObj = {
      id: this.id,
      Name: value.name,
      Email: value.email,
      Contact: value.contact,
      College_Name: value.clgname,
      Qualification: value.qualify,
      Specialization: value.specialize,
      Passing_Year: value.passingyear,
      Experience: value.exp,
      City_Name: value.cityname,
      Course: value.course,

    }


    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.dbSer.updateRecord(empObj).subscribe(() => { })
        Swal.fire('Saved!', '', 'success');
        this.route.navigate(['/enrollment']);

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    })

  }



}
