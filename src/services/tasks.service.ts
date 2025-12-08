import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getHello(name?: string): string[] {
    return [`Hello ${name ? name : 'World'}!`];
  }
}
