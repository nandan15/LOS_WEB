import {RouterModule,Routes} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared/shared.component';
import { NgModule } from '@angular/core';
const sharedRoutes:Routes=[
    {path:'',component:SharedComponent,children:[
        {path:'view',component:SidebarComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(sharedRoutes)],
    exports:[RouterModule]
})
export class projectrouter{}