import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url: string = "http://localhost:3000/api/";
  credentials = {withCredentials: true};
  connected: boolean = false;
  user: Member | undefined = undefined;
  members: Member[] = [];
  meObsrv: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.meObsrv = this.http.get(this.url + "me", this.credentials).pipe(share());
    this.meObsrv.subscribe((data: Member) => { this.userConnected(data) });
  }

  getMembers(): void {
    this.http.get(this.url + "members").subscribe({
      next: (data: any) => {
        this.members = data.data;
      },
      error: (err) => {
        console.error('Observable emitted an error: ' + err);
      },
      complete: () => {
        console.log('Observable emitted the complete notification');
      }
    });
  }

  signin(username: string, password: string) {
    return this.http.post(this.url + "signin", {username: username, password: password}, this.credentials);
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + "signup", {username: username, password: password, email: email});
  }

  userConnected(user: Member) {
    this.user = user;
    this.connected = true;
  }

  signout(): void {
    this.http.get(this.url + "logout", this.credentials).subscribe((data) => {
      this.connected = false;
      this.user = undefined;
      this.router.navigate(['/', 'home']);
    }, (err) => this.router.navigate(['/', 'home']));
  }

}

export class Member {
  id: number = 0;
  name: string = "";
  email: string = "";
}