import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { PipelineComponent } from "./pipeline/pipeline.component";
import { PipelineMainComponent } from "./pipeline-main/pipeline-main.component";
import { MyAssignedFilesComponent } from "./my-assigned-files/my-assigned-files.component";
import { SoftCreditPlusComponent } from "./soft-credit-plus/soft-credit-plus.component";

const pipelineRoutes:Routes=[
    {path:'',component:PipelineComponent,children:[{path:'view',component:ViewComponent}]},
    {path:'pipeline-main',component:PipelineMainComponent},
    {path:'my-assigned-files',component:MyAssignedFilesComponent},
    {path:'soft-credit-plus',component:SoftCreditPlusComponent},
];

@NgModule({
    imports:[RouterModule.forChild(pipelineRoutes)],
    exports:[RouterModule]
})

export class pipelinerouter{}