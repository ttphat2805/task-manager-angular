import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from 'src/app/components/dashboard/member/addmember/addmember.component';
import { MemberComponent } from 'src/app/components/dashboard/member/member.component';
import { UpdatememberComponent } from 'src/app/components/dashboard/member/updatemember/updatemember.component';
import { AddprojectComponent } from 'src/app/components/dashboard/project/addproject/addproject.component';
import { ProjectComponent } from 'src/app/components/dashboard/project/project.component';
import { ProjectdetailComponent } from 'src/app/components/dashboard/project/projectdetail/projectdetail.component';
import { UpdateprojectComponent } from 'src/app/components/dashboard/project/updateproject/updateproject.component';
import { StatisticalComponent } from 'src/app/components/dashboard/statistical/statistical.component';
import { AddtaskComponent } from 'src/app/components/dashboard/task/addtask/addtask.component';
import { TaskComponent } from 'src/app/components/dashboard/task/task.component';
import { UpdatetaskComponent } from 'src/app/components/dashboard/task/updatetask/updatetask.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';


const routes: Routes = [
  {
    path: '',
    component:DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: ProjectComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'addproject',
        component: AddprojectComponent
      }, 
      {
        path: 'project/updateproject/:id',
        redirectTo: 'updateproject/:id',
        component: UpdateprojectComponent,
      },
      {
        path: 'updateproject/:id',
        component: UpdateprojectComponent,
      },
      {
        path: 'project/:id',
        component: ProjectdetailComponent
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'addtask',
        component: AddtaskComponent
      },   
      {
        path: 'dashboard/task/updatetask/:id',
        redirectTo:'task/updatetask/:id',
        component: UpdatetaskComponent
      },
      {
        path: 'task/updatetask/:id',
        component: UpdatetaskComponent
      },
      
      {
        path: 'member',
        component: MemberComponent
      },
      {
        path: 'addmember',
        component: AddmemberComponent
      },
      {
        path: 'updatemember/:id',
        component: UpdatememberComponent
      },
      {
        path: 'chart',
        component: StatisticalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
