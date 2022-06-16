import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  listProject: Project[] = [];
  listMember : Member[] = [];
  id!: string;
  breadcrumbs: string = 'Cập nhật task';
  task = {
    name: "1",
    description: "",
    projectId: "",
    memberId: "",
    priority: "",
    status:"",
  }
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private memberService: MemberService
  ) { }
  name!:string;

  ngOnInit(): void {
    this.getListMembers();
    this.getListProjects();
    this.getOneTask();
  }


  onSubmit(form:any){
    const dataTask = {
      name: form.name,
      description: form.description,
      projectId: form.projectId,
      memberId: form.memberId,
      priority: form.priority,
      status: form.status,
    }

    this.taskService.updateTask(dataTask as Task, this.id).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['dashboard/task'])

    })
  }

  getOneTask() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.router.navigate(['dashboard/project']);
    }

    this.taskService.getTaskById(this.id).subscribe((task:any) => {
      // SET VALUE FORM
      let data = task.data[0];
      
      this.task = {
        name: data.name,
        description: data.description,
        projectId: data.projectId._id,
        memberId: data.memberId._id,
        priority: data.priority,
        status:String(data.status)
      }
    });
  }

    getListMembers() {
      this.memberService.getMembers().subscribe((data: any) => {
        let listMember = data.data;
        for (let member of listMember) {
          if (member.role == 'member') {
            this.listMember.push(member);
          }
        }
      });
    }

    getListProjects() {
      this.projectService.getProject().subscribe((data: any) => {
        this.listProject = data.data;
      })
    }
} 
