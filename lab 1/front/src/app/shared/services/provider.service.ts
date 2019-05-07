import {EventEmitter, Injectable} from '@angular/core';
import { MainService } from './main.service';
import {HttpClient} from '@angular/common/http';
import { ITask, ITaskList } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://127.0.0.1:8000/api/task_lists/', {});
  }

  getTaskListDetail(id: number): Promise<ITaskList> {
    return this.get(`http://127.0.0.1:8000/api/task_lists/${id}/`, {});
  }

  getTaskListTasks(id: number): Promise<ITask[]> {
    return this.get(`http://127.0.0.1:8000/api/task_lists/${id}/tasks/`, {});
  }

  getTaskDetail(id: number): Promise<ITask> {
    return this.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {});
  }

}