import { Component, OnInit } from '@angular/core';

import { ProviderService } from './../shared/services/provider.service';
import { ITask, ITaskList } from '../shared/models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = []
  taskLists: ITaskList[] = []

  taskName = ''
  taskStatus = ''
  selectedTaskList: string = '';
  selectedTaskListId: number;

  constructor(
    private provider: ProviderService
    ) { }

  ngOnInit() {
    this.provider.getTasks().then(res => 
      this.tasks = res
    );

    this.provider.getTaskLists().then(res =>
      this.taskLists = res
    );
  }

  createTask() {

    if (this.taskName != '' && this.taskStatus != '' && this.selectedTaskListId) {
      this.provider.createTask(this.taskName, this.taskStatus, this.selectedTaskListId).then(res =>
        this.tasks.push(res)
      );
    }
  }
}
