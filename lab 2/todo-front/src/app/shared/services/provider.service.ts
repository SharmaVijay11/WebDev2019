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

  getTasks(): Promise<ITask[]> {
    return this.get('http://127.0.0.1:8000/api/tasks/', {});
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

  createTaskList(name: any): Promise<ITaskList> {
    return this.post('http://127.0.0.1:8000/api/task_lists/', {
      name: name
    });
  }

  updateTaskList(taskList: ITaskList): Promise<ITaskList> {
    return this.put(`http://localhost:8000/api/task_lists/${taskList.id}/`, {
      name: taskList.name
    });
  }

  deleteTaskList(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  createTask(name: string, status: string, taskListId: number): Promise<ITask> {
    // console.log(name, status, taskListId);
    return this.post(`http://localhost:8000/api/tasks/`, {
      name: name,
      status: status,
      task_list_id: taskListId
    });
  }

  updateTask(task: ITask): Promise<ITask> {
    return this.put(`http://localhost:8000/api/tasks/${task.id}/`, {
      name: task.name,
      due_on: task.due_on,
      status: task.status
    });
  }

  deleteTask(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/tasks/${id}/`, {});
  }
}