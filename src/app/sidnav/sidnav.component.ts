import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    if (sessionStorage.getItem('admin')) {
      return true
    } else {
      return false
    }

  }
}
