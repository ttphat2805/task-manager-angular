import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  breadcrumbs :string = 'Danh sách task';
  url :string = 'task';
  constructor(private taskService :TaskService) { }
  searchKey:string = '';
  listTask : Task[] = [];


  ngOnInit(): void {
    this.listTask = this.taskService.getTask();
  }

}
