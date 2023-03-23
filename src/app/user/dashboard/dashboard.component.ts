import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatabaseService } from 'src/app/shared/services/database.service';
import Swal from 'sweetalert2';

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



  constructor(private dbservice: DatabaseService,private modalService: BsModalService) {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetchData() {
    this.dbservice.getEmp().subscribe((res) => {
      this.employees = res;
    })
  }

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
      ) 
      {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }


}
