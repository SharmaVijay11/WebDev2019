import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskListsTasksComponent } from './task-lists-tasks/task-lists-tasks.component';
import { TaskListsDetailComponent } from './task-lists-detail/task-lists-detail.component';
import { TasksDetailComponent } from './tasks-detail/tasks-detail.component';

import { ProviderService } from './shared/services/provider.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListsComponent,
    TaskListsTasksComponent,
    TaskListsDetailComponent,
    TasksDetailComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
