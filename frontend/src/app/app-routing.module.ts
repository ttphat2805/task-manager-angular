import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './service/auth.guard';
const routes: Routes = [
  // DASHBOARD LAYOUT
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./layouts/dashboard-layout/dashboard-layout.module').then(
        (m) => m.DashboardLayoutModule
      ),
    canActivate:[AuthGuard]

  },


  // AUTH
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule)
  },

  {
    path: '',
    component: HomeComponent,
  },

  { path: '**', component: NotfoundComponent },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
