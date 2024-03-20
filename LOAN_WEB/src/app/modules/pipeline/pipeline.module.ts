import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ViewComponent } from './view/view.component';
import { pipelinerouter } from './pipeline.router';
import { PipelineMainComponent } from './pipeline-main/pipeline-main.component';
import { MyAssignedFilesComponent } from './my-assigned-files/my-assigned-files.component';
import { SoftCreditPlusComponent } from './soft-credit-plus/soft-credit-plus.component';


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
    pipelinerouter
  ]
})
export class PipelineModule { }
