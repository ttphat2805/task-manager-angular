import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  listTask : Task[] = [
    {id:1,name:'Thực hiện giao diện',projectId:5,memberId:3,description:'Giao diện trang đăng ký,đăng nhập',priority:2,status:1},
    {id:2,name:'Làm chức năng đăng ký đăng nhập',projectId:2,memberId:5,description:'Thực hiện chức năng đăng ký đăng nhập kiểm lỗi',priority:2,status:1},
    {id:3,name:'Tìm hiểu yêu cầu khách hàng',projectId:1,memberId:4,description:'Đến công ty tìm hiểu thu thập ý kiến khách',priority:2,status:1},  
    {id:4,name:'Làm giao diện trang admin',projectId:5,memberId:3,description:'Thực hiện giao diện trang quản trị',priority:2,status:1},   
    {id:5,name:'Test chức năng authen webiste',projectId:2,memberId:6,description:'Test tất cả chức năng đăng nhập đăng ký website ',priority:2,status:1}, 
    {id:6,name:'Làm chức năng giỏ hàng',projectId:6,memberId:7,description:'Thực hiện thêm xóa sửa giỏ hàng',priority:2,status:1},
  ];

  constructor() { }

  getTask(){
    return this.listTask;
  }

  getTaskById(id: number){
    return this.listTask.find(task => task.id === id);
  }
}
