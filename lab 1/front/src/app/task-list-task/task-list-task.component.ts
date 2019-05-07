import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITask, ITaskList } from '../shared/models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list-task',
  templateUrl: './task-list-task.component.html',
  styleUrls: ['./task-list-task.component.css']
})
export class TaskListTaskComponent implements OnInit {

  id: number;

  tasks: ITask[] = [];
  taskList: any = {}; // TaskList

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.provider.getTaskListTasks(this.id).then((res) => {
        this.tasks = res;
        console.log(res)
      })

      this.provider.getTaskDetail(this.id).then((res) => {
        this.taskList = res;
      })
    }
  }
  

}
