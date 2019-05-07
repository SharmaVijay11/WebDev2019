import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListsTasksComponent } from './task-lists-tasks.component';

describe('TaskListsTasksComponent', () => {
  let component: TaskListsTasksComponent;
  let fixture: ComponentFixture<TaskListsTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListsTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
