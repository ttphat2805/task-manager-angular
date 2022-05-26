import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/member';
  constructor(
    private http:HttpClient
  ) { }

  getMember(){
    return this.http.get(this.url);
  }

  signUp(accounts : any){
    return this.http.post(this.url,accounts);
  }

  signIn(accounts:any){
    return this.http.post(`${this.url}/login`,accounts);
  }
}
