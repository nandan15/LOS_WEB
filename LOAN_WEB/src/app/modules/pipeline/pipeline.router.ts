import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { PipelineComponent } from "./pipeline/pipeline.component";

const pipelineRoutes:Routes=[
    {path:'',component:PipelineComponent,children:[{path:'view',component:ViewComponent}]}
];

@NgModule({
    imports:[RouterModule.forChild(pipelineRoutes)],
    exports:[RouterModule]
})

export class pipelinerouter{}