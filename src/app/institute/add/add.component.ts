import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from 'src/app/shared/services/institute.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private instSer: InstituteService, private route: Router) { }

  ngOnInit(): void {
  }

  addData(value: any) {
    const instObj = {
      Branch_Name: value.branchname,
      Contact: value.contact,
      City: value.cityname
    }


    Swal.fire(
      'Added!',
      'Your record has been added successfully!',
      'success'
    );
    this.instSer.addRecord(instObj).subscribe(() => {
      this.route.navigate(['/institute'])
    })
  }


}
