import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  FormTask!: FormGroup;
  listProject: Project[] = [];
  listMember : Member[] = [];
  breadcrumbs: string = 'Thêm task'
  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProject();
    this.getMember();
    this.getValueForm();
  }

  getValueForm(){
    this.FormTask = this.formbuilder.group({
      name:['', [Validators.required, Validators.minLength(6)]],
      description:['', [Validators.required, Validators.minLength(6)]],
      projectId:['', [Validators.required]],
      memberId:['', [Validators.required]],
      priority:['', [Validators.required]],
      status:['0', [Validators.required]],
    })
  }

  onSubmit(){
    this.addTask();
  }

  addTask(){
    const data = {
      name: this.FormTask.value.name,
      description: this.FormTask.value.description,
      projectId: this.FormTask.value.projectId,
      memberId: this.FormTask.value.memberId,
      priority: this.FormTask.value.priority,
      status: Number(this.FormTask.value.status),
    }
    this.taskService.addTask(data as Task).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard/task'])
    })
  }


  getProject(){
    this.projectService.getProject().subscribe((data:any) => {
        this.listProject = data.data
    })
  }

  getMember(){
    this.memberService.getMembers().subscribe((data:any) => {
      let listMember = data.data;
      for(let member of listMember){
        if(member.role == 'member'){
          this.listMember.push(member);
        }
      }
    })
  }
}
