import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {
  breadcrumbs :string = 'Thống kê';
  listMember : Member[] = [];
  listTask : Task[] = [];
  listProject : Project[] = [];
  price : number = 0;
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.listProject = this.projectService.getProject();
    this.listTask = this.taskService.getTask();
    this.listMember = this.memberService.getMembers();
    this.handlePrice();
  }

  handlePrice(){
    for(let i = 0; i < this.listProject.length; i++){
      this.price += this.listProject[i].price;
    }
  }

}
