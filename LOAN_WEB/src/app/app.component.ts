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
        { name: 'Pipeline - Main', route: '/submenu1' },
        { name: 'My Assigned Files', route: '/submenu2' },
        { name: 'Soft Credit Plus',route: '/submenu3' },
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
