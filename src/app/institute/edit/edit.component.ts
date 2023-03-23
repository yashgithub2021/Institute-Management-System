import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from 'src/app/shared/services/institute.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  instObj: any;

  constructor(private _active: ActivatedRoute, private instSer: InstituteService, private route: Router) { }

  ngOnInit(): void {

    this._active.paramMap.subscribe(par => {
      this.id = par.get('id');
      this.instSer.getsingleRec(this.id).subscribe((res) => {
        this.instObj = { ...res }
      })

    })
  }

  editInst(value: any) {
    const instObj = {
      id: this.id,
      Branch_Name: value.branchname,
      Contact: value.contact,
      City: value.cityname

    }

    this.instSer.updateRecord(instObj).subscribe(() => {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success');
          this.route.navigate(['/institute']);

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      })
    })
  }

}
