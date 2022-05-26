import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { MemberComponent } from './components/member/member.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectComponent } from './components/project/project.component';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { MobilepipePipe } from './pipes/mobilepipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StatisticalComponent } from './components/statistical/statistical.component';
import { MinwordspipePipe } from './pipes/minwordspipe.pipe';
const routes: Routes = [
  { path: '', component: ProjectComponent},
  { path: 'addproject', component: AddprojectComponent },
  { path: 'project/:id', component: ProjectdetailComponent },
  { path: 'member', component: MemberComponent },
  { path: 'addmember', component: AddmemberComponent },
  { path: 'task', component: TaskComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'chart', component: StatisticalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MemberComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectComponent,
    AddprojectComponent,
    AddtaskComponent,
    AddmemberComponent,
    MobilepipePipe,
    ProjectdetailComponent,
    LoginComponent,
    RegisterComponent,
    StatisticalComponent,
    MinwordspipePipe,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
