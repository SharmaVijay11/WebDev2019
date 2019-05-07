import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListsDetailComponent } from './task-lists-detail.component';

describe('TaskListsDetailComponent', () => {
  let component: TaskListsDetailComponent;
  let fixture: ComponentFixture<TaskListsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
