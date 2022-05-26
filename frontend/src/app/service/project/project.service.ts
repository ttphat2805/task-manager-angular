import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  listProjects:Project[] = [
    {id:1, name:'Quản lý quán ăn', dateStart:'2022-03-01', price:15000000,leader:3, member:[1,2,5]},
    {id:2, name:'Website bán thực phẩm', dateStart:'2022-04-12', price:12000000,leader:1, member:[4,5]},
    {id:3, name:'Website vệ sinh giày', dateStart:'2022-05-13', price:8000000,leader:1, member:[2,3]},
    {id:4, name:'Website thương mại', dateStart:'2022-10-18', price:11500000,leader:2, member:[3,5]},
    {id:5, name:'Quản lý quán coffee', dateStart:'2022-09-19', price:17000000,leader:2, member:[1,3,5]},
    {id:6, name:'Website bán thuốc tây', dateStart:'2022-02-17', price:9000000,leader:1, member:[2,5]},
    {id:7, name:'Quản lý nhân viên', dateStart:'2022-11-26', price:13000000,leader:3, member:[1,4,5]},
  ];
  constructor() { }


  getProject() {
    return this.listProjects;
  }

  getProjectById(id: number) {
    return this.listProjects.find((project) => project.id === id);
  }
}
