import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  employees: any;
  p: any = 1;
  term: any;
  modalRef?: BsModalRef;
  reverse = false;
  order: string = "name";
  jsonlen: any

  //Open Dialog
  openDialog() {
    this.dialog.open(DialogComponent);
  }


  constructor(private dbservice: DatabaseService, public dialog: MatDialog, private modalService: BsModalService, private _http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
    this._http.get('https://ims-database.onrender.com/employees').subscribe(data => {
      this.jsonlen = data
    })
  }

  //Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  //Change Order
  changeOrder() {
    this.reverse = !this.reverse;
  }

  //Fetch emp Data
  fetchData() {
    this.dbservice.getData().subscribe((res) => {
      this.employees = res;
    })
  }

  //Fetch Single Data Using ID
  getId(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.dbservice.deleteRecord(id).subscribe(() => {
          this.fetchData();
        })

        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your record has been deleted.',
          'success'
        )
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }


}
