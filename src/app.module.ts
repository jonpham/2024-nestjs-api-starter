import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { TaskController } from './tasks/tasks.controller';
import { TaskService } from './services/tasks.service';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [TaskService],
})
export class AppModule {}
