import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAuth!: FormGroup;
  constructor(private formbuilder: FormBuilder, private AuthService:AuthService, private router:Router) { }

  error : any = null;
  ngOnInit(): void {
    this.formAuth = this.formbuilder.group({
      email:['',[Validators.required, Validators.email, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  Onsubmit(){
    this.signUp();
  }


  signUp(){
    const accounts = {
      email : this.formAuth.value.email,
      password : this.formAuth.value.password,
    }
    this.AuthService.signIn(accounts).subscribe((data:any) => {
      if(data.type == 'fail'){
        this.error = data;
        setTimeout(() => {
          this.error = null;
        },3000)
      }else{
        this.formAuth.reset();
        this.router.navigate(['/member'])
      }
    }, error => {      
      console.log(error);
      this.formAuth.reset();
    })
  }
}
