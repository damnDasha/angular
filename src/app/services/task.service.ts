import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mck-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
