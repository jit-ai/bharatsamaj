import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Fixed key name
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x) {
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    }
  }
 openNav() {
  let side: any = document.getElementById('mySidenav');
  side.style.width = '100%';
  }
  
  closeNav() {
    let side: any = document.getElementById('mySidenav');
    side.style.width = '0';
  }
}
