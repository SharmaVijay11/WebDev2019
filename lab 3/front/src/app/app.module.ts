import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskListsDetailComponent } from './task-lists-detail/task-lists-detail.component';
import { TaskListsTasksComponent } from './task-lists-tasks/task-lists-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';

import { ProviderService } from './shared/services/provider.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListsComponent,
    TaskListsDetailComponent,
    TaskListsTasksComponent,
    TasksComponent,
    TasksDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
