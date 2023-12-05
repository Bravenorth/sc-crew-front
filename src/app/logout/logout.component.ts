import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(public membersService: MembersService) {}

}
