import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  id: number = 0;
  task: any = {};

  constructor(
    private route: ActivatedRoute,
    private provider: ProviderService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))

    if(this.id){
      this.provider.getTaskDetail(this.id).then(res => {
        this.task = res
      })
    }
  }

}
