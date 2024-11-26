import { Component, Input,Output,EventEmitter,inject } from '@angular/core';
import { Task } from './tasks.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TaskService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
