import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  searchKey:any = '';
  listProject : Project[] = [];
  breadcrumbs :string = 'Danh sách dự án';
  url :string = '';
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.listProject = this.projectService.getProject();
  } 




}
