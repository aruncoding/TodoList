import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent,NgFor,NgIf,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // @Input() taskName: string | undefined;
  // OR
  @Input() taskName?: string;
  @Input() id?: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.id)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !==id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}