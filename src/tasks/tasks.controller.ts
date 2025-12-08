import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from '../services/tasks.service';

/** Uses Nest Standard Responses, so need to use documentation to indicate responses */
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('tasks')
  /** POST Response Code : 201 (HttpStatus.CREATED) */
  create(task: string): string {
    return this.taskService.create(task);
  }

  @Get('tasks')
  /** GET Response Code : 200 (HttpStatus.OK) */
  findAll(): string[] {
    return this.taskService.findAll();
  }

  @Get('tasks/:id')
  getById(@Param('id') id: string): string[] {
    return this.taskService.get(id);
  }

  @Delete('tasks/:id')
  delete(@Param('id') id: string): string {
    return this.taskService.delete(id);
  }

  @Patch('tasks/:id')
  partialUpdate(@Param('id') id: string, task: string): string {
    return this.taskService.update(id, task);
  }

  @Put('tasks/:id')
  update(@Param('id') id: string, task: string): string {
    return this.taskService.update(id, task);
  }
}
