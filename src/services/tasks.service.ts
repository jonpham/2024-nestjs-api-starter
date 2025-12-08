import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  create(task: string): string {
    // Logic to create a task would go here
    return `Task "${task}" created successfully!`;
  }

  findAll(): string[] {
    // Logic to retrieve all tasks would go here
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  get(id: string): string[] {
    return [`Hello ${id ? id : 'World'}!`];
  }

  delete(id: string): string {
    // Logic to delete a task would go here
    return `Task with id "${id}" deleted successfully!`;
  }

  update(id: string, task: string): string {
    // Logic to update a task would go here
    return `Task with id "${id}" updated to "${task}" successfully!`;
  }
}
