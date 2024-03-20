import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { PipelineComponent } from "./pipeline/pipeline.component";
import { PipelineMainComponent } from "./pipeline-main/pipeline-main.component";

const pipelineRoutes:Routes=[
    {path:'',component:PipelineComponent,children:[{path:'view',component:ViewComponent}]},
    {path:'pipeline-main',component:PipelineMainComponent},
];

@NgModule({
    imports:[RouterModule.forChild(pipelineRoutes)],
    exports:[RouterModule]
})

export class pipelinerouter{}