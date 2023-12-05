import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sc-crew';
  
  constructor(private router: Router, private elemRef: ElementRef) {
    this.router.navigate(['/', 'home']);
  }

  closeModal() {
    let elems: HTMLCollection = this.elemRef.nativeElement.getElementsByTagName('dialog');
    for (let i = 0; i < elems.length; i++) {
      if (elems[i] instanceof HTMLDialogElement) {
        (<HTMLDialogElement>elems[i]).close();
      }
    }
  }
}
