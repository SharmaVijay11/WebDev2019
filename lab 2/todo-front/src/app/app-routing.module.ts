import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskListsDetailComponent } from './task-lists-detail/task-lists-detail.component';
import { TaskListsTasksComponent } from './task-lists-tasks/task-lists-tasks.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: 'task_lists', component: TaskListsComponent},
  {path: 'task_lists/:id', component: TaskListsDetailComponent},
  {path: 'task_lists/:id/tasks', component: TaskListsTasksComponent},
  {path: 'tasks/:id', component: TasksDetailComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }