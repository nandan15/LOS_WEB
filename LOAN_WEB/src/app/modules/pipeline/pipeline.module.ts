import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ViewComponent } from './view/view.component';
import { pipelinerouter } from './pipeline.router';
import { PipelineMainComponent } from './pipeline-main/pipeline-main.component';
import { MyAssignedFilesComponent } from './my-assigned-files/my-assigned-files.component';
import { SoftCreditPlusComponent } from './soft-credit-plus/soft-credit-plus.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatTableModule } from '@angular/material/table';
 
@NgModule({
  declarations: [
    PipelineComponent,
    ViewComponent,
    PipelineMainComponent,
    MyAssignedFilesComponent,
    SoftCreditPlusComponent
  ],
  imports: [
    CommonModule,
    pipelinerouter,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    PaginationModule,
    MatTableModule
  ]
})
export class PipelineModule { }
