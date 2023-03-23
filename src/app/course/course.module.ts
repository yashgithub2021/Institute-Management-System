import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CourseRoutingModule } from './course-routing.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    EditComponent,
    AddComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
  ]
})
export class CourseModule { }
