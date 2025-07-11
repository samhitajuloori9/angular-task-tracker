import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  imports: [TasksItemComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];

constructor(private taskService: TaskService){}
  
ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => this.tasks =tasks);
  }


}
