import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:5000/api/member';
  constructor(
    private http:HttpClient,
    private router: Router,
  ) { }

  getMember(){
    return this.http.get(this.url);
  }

  signUp(accounts : any){
    return this.http.post(this.url + '/register',accounts);
  }

  signIn(accounts:any):Observable<any>{
    return this.http.post(`${this.url}/login`,accounts).pipe(map((token:any) => {
      return this.saveToken(token.token);
    }));
  }
  
  private saveToken(token: any): any {
    if(!token){
      return
    }else{
      localStorage.setItem('auth_tkn', token);
      return token;
    }
  }

  logOut(){
    localStorage.removeItem('auth_tkn');
    this.router.navigate(['auth']);
  }

  getUserByToken(){
    return this.http.get(this.url + '/currentUser');
  }
}
