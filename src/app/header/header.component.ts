import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:any;
  id:any

  constructor(public _route:Router,private dbService:DatabaseService, private active:ActivatedRoute) { }

  ngOnInit(): void {
      this.fetchData();
  }

    fetchData(){
      this.dbService.getAdmin().subscribe((res)=>{
        this.name=res;
      })
    }

    getUsername(){
      return sessionStorage.getItem('users')
    }

    getAdminname(){
      return sessionStorage.getItem('admin')
    }
}
