import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskListTaskComponent } from './task-list-task/task-list-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { ProviderService } from './shared/services/provider.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListsComponent,
    TaskListDetailComponent,
    TaskListTaskComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
