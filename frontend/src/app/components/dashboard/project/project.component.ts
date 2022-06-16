import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  searchKey: any = '';
  confirm: boolean = false;
  listProject: Project[] = [];
  listMember: Member[] = [];
  idMemberArr: any = [];
  breadcrumbs: string = 'Danh sách dự án';
  url: string = '';
  id!: string;
  constructor(
    private projectService: ProjectService,
    private memberService: MemberService
  ) {}
  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    this.projectService.getProject().subscribe((project: any) => {
      this.listProject = project.data;
    });
  }

  deleteMember(id: string) {
    this.confirm = true;
    this.id = id;
  }
  agreeConfirm() {
    this.projectService.delete(this.id).subscribe((res: any) => {
      this.getProject();
    });

    this.confirm = false;
  }
  cancelConfirm() {
    this.confirm = false;
  }
}
