import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';
import Swal from 'sweetalert2';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private dbservice: DatabaseService, private route: Router) { }


  ngOnInit(): void {
  }

  addData(value: any) {
    const empObj = {
      username: value.name,
      Email: value.email,
      Contact: value.contact,
      password: value.password
    }
    

    Swal.fire(
      'Added!',
      'Your record has been added successfully!',
      'success'
    );
    this.dbservice.addEmp(empObj).subscribe(() => {
      // window.alert("Record Added Successfully!");
      this.route.navigate(['/user'])
    })
  }



}






