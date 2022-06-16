import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formAuth!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private commonService: CommonService
  ) {}

  error: any = null;
  ngOnInit(): void {
    this.checkAuth();
    this.formAuth = this.formbuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Onsubmit() {
    this.signUp();
  }

  checkAuth() {
    if (this.commonService.isAuthenticated()) {
      this.router.navigate([]);
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }

  signUp() {
    const accounts = {
      email: this.formAuth.value.email,
      password: this.formAuth.value.password,
    };
    this.AuthService.signIn(accounts).subscribe(
      (data: any) => {
        if(data){
          this.formAuth.reset();
          this.router.navigate(['/']);
        }else{
          this.error = "Tài khoản hoặc mật khẩu không tồn tại";
          setTimeout(() => {
            this.error = null;
          }, 3000);
        }
      },
      (error) => {
        console.log(error);
        this.formAuth.reset();
      }
    );
  }
}
