import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css'],
})
export class UpdatememberComponent implements OnInit {
  FormMember!: FormGroup;
  breadcrumbs: string = 'Cập nhật thành viên';
  id!: string;
  constructor(
    private memberService: MemberService,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getValueForm();
    this.getOneMember();
  }

  getValueForm() {
    this.FormMember = this.formbuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [Validators.required, Validators.minLength(6), Validators.email],
      ],
      date: ['', [Validators.required]],
      area: ['', [Validators.required]],
      role: ['member', [Validators.required]],
      status: ['0', [Validators.required]],
    });
  }

  getOneMember() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.router.navigate(['dashboard/project']);
    }

    this.memberService.getMemberById(this.id).subscribe((member:any) => {
      // SET VALUE FORM
      let data = member.data;
      
      this.FormMember.patchValue({
        fullname:data.fullname,
        email:data.email,
        date:data.date,
        area:data.area,
        role:data.role,
        status: String(data.status) 
      });
    });
  }

  onSubmit() {
    this.updateMember();
  }

  updateMember() {
    const data = {
      fullname: this.FormMember.value.fullname,
      email: this.FormMember.value.email,
      password: 'default',
      date: this.FormMember.value.date,
      area: this.FormMember.value.area,
      role: this.FormMember.value.role,
      status: Number(this.FormMember.value.status),
    };
    this.memberService
      .updateMember(data as Member, this.id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['dashboard/member'])
      });
  }
}
