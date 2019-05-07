import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

import { ITaskList } from './../shared/models/models';

@Component({
  selector: 'app-task-list-detail',
  templateUrl: './task-list-detail.component.html',
  styleUrls: ['./task-list-detail.component.css']
})
export class TaskListDetailComponent implements OnInit {

  id: number;
  taskTistDetail: any = {};

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    if (this.id) {
      this.provider.getTaskListDetail(this.id).then((res) => {
        this.taskTistDetail = res;
      })
    }
  }

}
