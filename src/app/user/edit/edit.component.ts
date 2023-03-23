import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  id: any;
  empObj: any

  constructor(private _active: ActivatedRoute, private dbSer: DatabaseService, private route: Router) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.dbSer.getsingleEmp(this.id).subscribe((res) => {
        this.empObj = { ...res }
      })
    })

  }

  editEmp(value: any) {
    const empObj = {
      id: this.id,
      username: value.name,
      Email: value.email,
      Contact: value.contact,
      password: value.password

    }

    this.dbSer.updateEmp(empObj).subscribe(() => {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success');
          this.route.navigate(['/user']);

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      })
    })
  }



}
