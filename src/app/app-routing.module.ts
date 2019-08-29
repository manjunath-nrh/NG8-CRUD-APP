import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component'

const routes: Routes = [
  { path: 'task', component: TasksComponent },
  {path : '', component : TasksComponent},
  { path: '',   redirectTo: '/task', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
