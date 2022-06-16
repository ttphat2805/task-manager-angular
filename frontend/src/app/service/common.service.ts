import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private jwtToken: string = '';

  constructor() {
    const token: any = !!localStorage.getItem('auth_tkn')
      ? localStorage.getItem('auth_tkn')
      : null;
    if (token) {
      this.jwtToken = token;
      this.isAuthenticated();
    }
  }

  public isAuthenticated = () => {
    return !!this.jwtToken;
  };
}
