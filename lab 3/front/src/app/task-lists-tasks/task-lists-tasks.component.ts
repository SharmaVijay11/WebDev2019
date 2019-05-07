import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITask, ITaskList } from '../shared/models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-lists-tasks',
  templateUrl: './task-lists-tasks.component.html',
  styleUrls: ['./task-lists-tasks.component.css']
})
export class TaskListsTasksComponent implements OnInit {
  
  id: number;

  tasks: ITask[] = [];
  taskList: any = {}; // ITaskList?

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.provider.getTaskListTasks(this.id).then((res) => {
        this.tasks = res;
      })

      this.provider.getTaskListDetail(this.id).then((res) => {
        this.taskList = res;
      })
    }
  }
}
