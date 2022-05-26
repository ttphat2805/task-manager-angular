import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
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
      password:['',[Validators.required, Validators.minLength(6)]]
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
    }
    this.AuthService.signUp(accounts).subscribe(data => {
      this.router.navigate(['/login']);
      this.formAuth.reset();
    }, error => {
      this.router.navigate(['/login']);
      this.formAuth.reset();
      console.log(error);
    })
  }
}
