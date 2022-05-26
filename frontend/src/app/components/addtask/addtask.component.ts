import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  breadcrumbs :string = 'Thêm task';

  constructor(private projectService: ProjectService, private memberService: MemberService) { }
  listProject: Project[]= [];
  listMember: Member[]= [];

  ngOnInit(): void {
    this.listProject = this.projectService.getProject();
    this.listMember = this.memberService.getMembers();

  }

}
