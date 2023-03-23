import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  employees: any;
  id:any;


  constructor(private dbservice: DatabaseService) { }

  ngOnInit(): void {

  }

  

}
