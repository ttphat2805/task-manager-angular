import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { ProjectComponent } from 'src/app/components/dashboard/project/project.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddprojectComponent } from 'src/app/components/dashboard/project/addproject/addproject.component';
import { UpdateprojectComponent } from 'src/app/components/dashboard/project/updateproject/updateproject.component';
import { AddtaskComponent } from 'src/app/components/dashboard/task/addtask/addtask.component';
import { UpdatetaskComponent } from 'src/app/components/dashboard/task/updatetask/updatetask.component';
import { ProjectdetailComponent } from 'src/app/components/dashboard/project/projectdetail/projectdetail.component';
import { MemberComponent } from 'src/app/components/dashboard/member/member.component';
import { MobilepipePipe } from 'src/app/pipes/mobilepipe.pipe';
import { AddmemberComponent } from 'src/app/components/dashboard/member/addmember/addmember.component';
import { TaskComponent } from 'src/app/components/dashboard/task/task.component';
import { MinwordspipePipe } from 'src/app/pipes/minwordspipe.pipe';
import { StatisticalComponent } from 'src/app/components/dashboard/statistical/statistical.component';
import { UpdatememberComponent } from 'src/app/components/dashboard/member/updatemember/updatemember.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ProjectComponent,
    AddprojectComponent,
    UpdateprojectComponent,
    TaskComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ProjectdetailComponent,
    MemberComponent,
    AddmemberComponent,
    UpdatememberComponent,
    StatisticalComponent,
    MobilepipePipe,
    MinwordspipePipe,
  ],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class DashboardLayoutModule { }
