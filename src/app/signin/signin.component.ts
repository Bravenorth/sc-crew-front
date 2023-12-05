import { Component, ComponentRef } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  username: string = "";
  password: string = "";

  constructor(public membersService: MembersService, private router: Router) {
    
  }

  signin(): void {
    this.membersService.signin(this.username, this.password);
  }

  signup(): void {
    this.router.navigate(['/', 'signup']);
  }
}
