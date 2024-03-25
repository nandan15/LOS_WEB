import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { BranchComponent } from './branch/branch.component';
import { BrokerComponent } from './broker/broker.component';
import { LoanofficerComponent } from './loanofficer/loanofficer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { CreateBackOfficeuserComponent } from './create-back-officeuser/create-back-officeuser.component';
import { BackOfficelistComponent } from './back-officelist/back-officelist.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    BranchComponent,
    BrokerComponent,
    LoanofficerComponent,
    ContactsComponent,
    BorrowersComponent,
    CreateBackOfficeuserComponent,
    BackOfficelistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsercontactsModule { }
