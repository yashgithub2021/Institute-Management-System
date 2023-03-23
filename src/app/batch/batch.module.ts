import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BatchRoutingModule } from './batch-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ]
})
export class BatchModule { }
