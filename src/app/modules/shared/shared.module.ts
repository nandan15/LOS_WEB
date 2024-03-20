import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
  ]
})
export class SharedModule { }
