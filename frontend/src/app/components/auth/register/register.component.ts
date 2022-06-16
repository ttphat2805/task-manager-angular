import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formAuth!: FormGroup;
  error:any = null;
  constructor(private formbuilder: FormBuilder, private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.formAuth = this.formbuilder.group({
      fullname:['',[Validators.required, Validators.minLength(6)]],
      email:['',[Validators.required, Validators.email, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      area:['',[Validators.required]],
      date:['',[Validators.required]],
    })
  }


  Onsubmit(){
    this.signUp();
  }


  signUp(){
    const accounts = {
      fullname : this.formAuth.value.fullname,
      email : this.formAuth.value.email,
      password : this.formAuth.value.password,
      area : this.formAuth.value.area,
      date : this.formAuth.value.date,
      role: "member",
      status:1
    }
    this.AuthService.signUp(accounts).subscribe(data => {
      this.router.navigate(['/auth/login']);
      this.formAuth.reset();
    }, error => {
      this.router.navigate(['/login']);
      this.formAuth.reset();
    })
  }

}
