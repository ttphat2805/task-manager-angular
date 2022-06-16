import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  FormMember!: FormGroup;
  breadcrumbs: string = 'Thêm thành viên';

  constructor(
    private memberService: MemberService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getValueForm();
  }

  getValueForm(){
    this.FormMember = this.formbuilder.group({
      fullname:['', [Validators.required, Validators.minLength(6)]],
      email:['', [Validators.required, Validators.minLength(6), Validators.email]],
      date:['', [Validators.required]],
      area:['', [Validators.required]],
      role:['member', [Validators.required]],
      status:['0', [Validators.required]],
    })
  }

  onSubmit(){
    this.addMember();
  }

  addMember(){
    const data = {
      fullname: this.FormMember.value.fullname,
      email: this.FormMember.value.email,
      password:'default',
      date: this.FormMember.value.date,
      area: this.FormMember.value.area,
      role: this.FormMember.value.role,
      status: Number(this.FormMember.value.status),
    }
    this.memberService.addMember(data as Member).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard/member'])
    })
    
  }
}
