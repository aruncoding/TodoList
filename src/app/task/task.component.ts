import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { TaskService } from './task.service';
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
  @Input({required: true}) id!: string;
  isAddingTask = false;
  // private tasksService:TaskService(); // Dependency Injection :- you tell angular which type of value you need and angular created it and provides it as an argument

  constructor(private tasksService:TaskService){} 
 

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id);
  }

  onCompleteTask(id: string){
    
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
