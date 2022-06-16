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
    this.getTask();
    this.projectService.getProject().subscribe((project:any) => {
      let data = project.data;
      this.listProject = data;
      for(let item of this.listProject){
        this.price += Number(item.price);
      }
    })
    
    this.memberService.getMembers().subscribe((member:any) => {
      let data = member.data;
      this.listMember = data;
    })

  }
  getTask(){
    this.taskService.getTask().subscribe((data:any) => {
      if(data){
        for(let member of data.data){
          if(member.memberId){
          this.listTask.push(member);
          }
        }
      }
    })
  }

}
