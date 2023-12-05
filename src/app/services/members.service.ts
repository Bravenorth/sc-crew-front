import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  url: string = "http://localhost:3000/api/";
  //credentials = {withCredentials: true};
  //connected: boolean = false;
  
  members: Member[] = [];

  constructor(private http: HttpClient) { }

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

    //this.http.post();
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + "signup", {username: username, password: password, email: email});
  }
}

class Member {
  id: number = 0;
  name: string = "";
  email: string = "";
  password: string = "";
}