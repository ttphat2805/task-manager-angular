import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  FormProject!: FormGroup;
  Leader: Member[] = [];
  Member: Member[] = [];
  errosMember!: string | null;
  breadcrumbs: string = 'Thêm dự án';
  constructor(
    private formbuilder: FormBuilder,
    private memberService: MemberService,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getValueForm();
    this.getLeader();
    this.getMember();
  }

  getValueForm() {
    this.FormProject = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      price: ['', [Validators.required]],
      leader: ['', [Validators.required]],
      member: this.formbuilder.array([]),
      status: ['0', [Validators.required]],
    });
  }

  onCheckboxChange(e: any, member:Member) {
    const checkArray: FormArray = this.FormProject.get('member') as FormArray;
    if (e.target.checked) {
      checkArray.push(
        new FormControl(
           e.target.value,
        )
      );
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    this.addProject();
  }

  addProject() {
    const data = {
      name: this.FormProject.value.name,
      dateStart: this.FormProject.value.dateStart,
      dateEnd: this.FormProject.value.dateEnd,
      price: this.FormProject.value.price,
      leader: this.FormProject.value.leader,
      member: this.FormProject.value.member,
      status: Number(this.FormProject.value.status),
    };

    if(data.member.length == 0){
      this.errosMember = 'Vui lòng chọn thành viên';
    }else{
      this.errosMember = null;
      this.projectService.addProject(data as Project).subscribe((data) => {
        this.router.navigate(['dashboard/project'])
      });
    }
  }

  getLeader() {
    this.memberService.getMembers().subscribe((data: any) => {
      let listMember = data.data;
      for (let member of listMember) {
        if (member.role == 'leader') {
          this.Leader.push(member);
        }
      }
    });
  }

  getMember() {
    this.memberService.getMembers().subscribe((data: any) => {
      let listMember = data.data;
      for (let member of listMember) {
        if (member.role == 'member') {
          this.Member.push(member);
        }
      }
    });
  }
}
