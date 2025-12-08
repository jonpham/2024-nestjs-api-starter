import { Controller, Get } from '@nestjs/common';
import { TaskService } from '../services/tasks.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  findAll(): string[] {
    return this.taskService.getHello();
  }
}
