import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { ITaskList } from './../shared/models/models';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {
 
  id: number = 0;
  task: any = {};

  constructor(
    private route: ActivatedRoute,
    private provider: ProviderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))

    if(this.id){
      this.provider.getTaskDetail(this.id).then(res => {
        this.task = res
      })
    }
  }

  updateTask(){
    this.provider.updateTask(this.task).then(res => {
      this.task = res
      this.location.back()
    })
  }

  deleteTask(){
    this.provider.deleteTask(this.task.id).then(() => {
      this.location.back()
    })
  }

}
