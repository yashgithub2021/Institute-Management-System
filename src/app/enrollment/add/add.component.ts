import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  qualification = ["SSC (10th)", "HSC (12th)", "BCA", "BSC", "B.Tech", "B.Com", "MCA", "MSC", "Other"];
  specialization: string[] = ["Science", "Computer Science", "Maths", "Other"];
  yearOfpass: number[] = [2018, 2019, 2020, 2021];
  experience: any[] = ["0-1 Years", "1-3 Years", "3-5 Years"];
  course: string[] = ["Angular", "React", "Android Development", "Python", "Java", "C++"]
  isVisible: any;
  isSelected: boolean = true;
  batch = ["Morning", "Afternoon", "Evening"]
  spvisible: any;


  constructor(private dbservice: DatabaseService, private route: Router) { }


  ngOnInit(): void {
  }

  addData(value: any) {
    const empObj = {
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
      Institute: value.institute,
      Batch_Type: value.batchtype
    }


    Swal.fire(
      'Added!',
      'Your record has been added successfully!',
      'success'
    );
    this.dbservice.addRecord(empObj).subscribe(() => {
      this.route.navigate(['/enrollment'])
    })
  }



}






