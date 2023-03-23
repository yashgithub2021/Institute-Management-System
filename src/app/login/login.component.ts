import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  userPass: any;
  userArray: any;

  Username: any;
  Userpass: any;
  Userarray: any;

  constructor(private userSer: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userSer.removeAdmin();
    this.userSer.removeUser();
  }

  //For Admin
  getData() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    this.userSer.getAdmin().subscribe((res) => {
      this.userArray = res;
      const data = this.userArray.filter((item: any) => {
        return item.username == this.userName && item.password == this.userPass
      })
      if (data.length > 0) {
        this.userSer.setAdmin(this.userName);
        Swal.fire(
          'Success!',
          'Login Successful!',
          'success'
        );
        this.route.navigate(['/enrollment'])
      }
      else {
        swalWithBootstrapButtons.fire(
          'Wrong User Id or Password',
          'Please Try Again... :)',
          'error'
        );
        this.userName = '';
        this.userPass = '';
      }
    })
  }

  //For User
  getUser() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    // console.log(this.userName,this.userPass);
    this.userSer.getUser().subscribe((res) => {
      this.Userarray = res;
      //  console.log(this.Userarray);
      const data = this.Userarray.filter((item: any) => {
        return item.username == this.Username && item.password == this.Userpass
      })
      if (data.length > 0) {
        this.userSer.setUser(this.Username);
        Swal.fire(
          'Success!',
          'Login Successful!',
          'success'
        );
        this.route.navigate(['/enrollment'])
      }
      else {
        swalWithBootstrapButtons.fire(
          'Wrong User Id or Password',
          'Please Try Again... :)',
          'error'
        );
        this.Username = '';
        this.Userpass = '';
      }
    })
  }



}
