import { Component, ViewChild } from '@angular/core';


//Other Imports
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from "@angular/cdk/layout";
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
// import { untilDestroyed } from '@ngneat/until-destroy';

interface MenuItem {
  name: string;
  subMenuItems: { name: string, route: string }[];
  subMenuVisible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'LoanBud';


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private router: Router,
   ) { }

   menuItems = [
    {
      name: '>',
      subMenuItems: [
        { name: 'Pipeline - Main', route: '/pipeline/pipeline-main' },
        { name: 'My Assigned Files', route: '/pipeline/my-assigned-files' },
        { name: 'Soft Credit Plus',route: '/pipeline/soft-credit-plus' },
      ],
      subMenuVisible: false
    },
   ];

   menuItems2 = [
    {
      name: '>',
      subMenuItems: [
        { name: 'Back Office', route: '/usercontacts/backoffice' },
        { name: 'Branch', route: '/usercontacts/branch' },
        { name: 'Broker', route: '/usercontacts/broker' },
        { name: 'Loan Officer', route: '/usercontacts/loanofficer' },
        { name: 'Contacts', route: '/usercontacts/contacts' },
        { name: 'Borrowers', route: '/usercontacts/borrowers' },
      ],
      subMenuVisible: false
    },
   ];

   ngAfterViewInit() {
    // this.observer
    //   .observe(['(max-width: 800px)'])
    //   .pipe(delay(1), untilDestroyed(this))
    //   .subscribe((res) => {
    //     if (res.matches) 
    //     {
    //       this.sidenav.mode = 'over';
    //       this.sidenav.close();
    //     } 
    //     else 
    //     {
    //       this.sidenav.mode = 'side';
    //       this.sidenav.open();
    //     }
    //   });
     
    // this.router.events
    //   .pipe( untilDestroyed(this), filter((e) => e instanceof NavigationEnd) )
    //   .subscribe(() => { if (this.sidenav.mode === 'over') { this.sidenav.close(); } });
  }

  toggleSubMenu(menuItem: MenuItem): void {
    menuItem.subMenuVisible = !menuItem.subMenuVisible;
  }
}
