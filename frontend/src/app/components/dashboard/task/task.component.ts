import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  confirm: boolean = false;
  breadcrumbs :string = 'Danh sách task';
  url :string = 'task';
  id!:string;
  constructor(
    private taskService :TaskService,
  ) { }
  searchKey:string = '';
  listTask : Task[] = [];


  ngOnInit(): void {
    this.getTask();
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

  
  deleteMember(id: string) {
    this.confirm = true;
    this.id = id;
  }




  agreeConfirm() {
    this.taskService.delete(this.id).subscribe((res: any) => {
      this.getTask();
    });

    this.confirm = false;
  }
  cancelConfirm() {
    this.confirm = false;
  }
}
