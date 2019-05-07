import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../shared/services/provider.service';
import { ITaskList } from './../shared/models/models';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {
  
  taskLists: ITaskList[] = [];

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
    this.provider.getTaskLists().then((res) => {
      this.taskLists = res;
    })
  }

}
