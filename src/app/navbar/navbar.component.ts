import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public membersService: MembersService) {}
}
