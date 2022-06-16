import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService, private router: Router
  ) { }
  breadcrumbs :string = '';
  ngOnInit(): void {
    this.authService.getUserByToken().subscribe((user:any) => {
      let role = user.data;
      if(role && role !== 'admin'){
        alert('Chỉ admin mới được vào trang này');
        this.router.navigate(['/auth'])
        localStorage.removeItem('auth_tkn');
      }
    })
  }


  Onactive(event:any){
    if(event && event.breadcrumbs){
      this.breadcrumbs = event.breadcrumbs;
    }
  }

  logOut(){
    this.authService.logOut();
  }
}
