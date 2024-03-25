import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackOfficelistComponent } from "./back-officelist/back-officelist.component";
import { BackofficeComponent } from "./backoffice/backoffice.component";
import { BorrowersComponent } from "./borrowers/borrowers.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CreateBackOfficeuserComponent } from "./create-back-officeuser/create-back-officeuser.component";
import { LoanofficerComponent } from "./loanofficer/loanofficer.component";
import { BranchComponent } from "./branch/branch.component";
import { BrokerComponent } from "./broker/broker.component";

const usercontactsRoutes:Routes=[
    {path:'back-officelist',component:BackOfficelistComponent},
    {path:'backoffice',component:BackofficeComponent},
    {path:'borrowers',component:BorrowersComponent},
    {path:'branch',component:BranchComponent},
    {path:'broker',component:BrokerComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'create-back-officeuser',component:CreateBackOfficeuserComponent},
    {path:'loanofficer',component:LoanofficerComponent}
];

@NgModule({
    imports:[RouterModule.forChild(usercontactsRoutes)],
    exports:[RouterModule]
})

export class usercontactsRouter{}