import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  searchKey: string = '';
  textConfirm: string = 'Bạn có chắc muốn xóa không ?';
  breadcrumbs: string = 'Danh sách thành viên';
  confirm: boolean = false;
  checkConfirm: boolean = true;
  id!: string;
  listMember!: Member[];
  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    this.getListMember();
  }

  deleteMember(id: string) {
    this.confirm = true;
    this.id = id;
    this.projectService.getProject().subscribe((project: any) => {
      for (let pj of project.data) {
        if (this.id == pj.leader._id) {
          this.checkConfirm = false;
          this.textConfirm = 'Thành viên này đã có trong dự án ?';
        } else {
          for (let member of pj.member) {
            if (this.id == member._id) {
              this.checkConfirm = false;
              this.textConfirm = 'Thành viên này đã có trong dự án ?';
            }
          }
        }
      }
    });

    this.taskService.getTask().subscribe((data: any) => {
      for (let task of data.data) {
        if (this.id == task.memberId._id) {
          this.checkConfirm = false;
          this.textConfirm = 'Thành viên này đã được giao task ?';
        }
      }
    });
  }

  agreeConfirm() {
    if (this.checkConfirm) {
      this.memberService.delete(this.id).subscribe((res: any) => {
        this.getListMember();
      });
    }
    this.confirm = false;
  }
  cancelConfirm() {
    this.confirm = false;
  }

  getListMember() {
    this.memberService.getMembers().subscribe((res: any) => {
      if (res) {
        this.listMember = res.data;
      }
    });
  }
}
