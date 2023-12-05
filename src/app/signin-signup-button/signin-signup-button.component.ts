import { Component, ElementRef } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin-signup-button',
  standalone: true,
  imports: [SigninComponent, SignupComponent],
  templateUrl: './signin-signup-button.component.html',
  styleUrl: './signin-signup-button.component.scss'
})
export class SigninSignupButtonComponent {

  constructor(private elemRef: ElementRef) {}

  openModal(modal: HTMLDialogElement): void {
    this.closeModals();
    modal.showModal();
  }

  closeModals(): void {
    let elems: HTMLCollection = this.elemRef.nativeElement.getElementsByTagName('dialog');
    for (let i = 0; i < elems.length; i++) {
      if (elems[i] instanceof HTMLDialogElement) {
        (<HTMLDialogElement>elems[i]).close();
      }
    }
  }
}
