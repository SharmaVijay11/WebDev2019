import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-task-lists-detail',
  templateUrl: './task-lists-detail.component.html',
  styleUrls: ['./task-lists-detail.component.css']
})
export class TaskListsDetailComponent implements OnInit {

  id: number;
  taskListDetail: any = {};

  taskListName: string = ''

  constructor(
    private provider: ProviderService,
    private location: Location,
    private router: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    if (this.id) {
      this.provider.getTaskListDetail(this.id).then((res) => {
        this.taskListDetail = res;
      });
    }
  }

  updateTaskList(){
    this.provider.updateTaskList(this.taskListDetail).then(res => {
      this.taskListDetail = res
    });
  }

  deleteTaskList(){
    this.provider.deleteTaskList(this.taskListDetail.id).then(() => {
      this.location.back()
    })
  }


}
