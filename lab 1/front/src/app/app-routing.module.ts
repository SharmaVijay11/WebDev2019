import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskListTaskComponent } from './task-list-task/task-list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {path: 'task_lists', component: TaskListsComponent},
  {path: 'task_lists/:id', component: TaskListDetailComponent},
  {path: 'task_lists/:id/tasks', component: TaskListTaskComponent},
  {path: 'task/:id', component: TaskDetailComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }