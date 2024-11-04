import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { TodoAlarmService } from './services/todo-alarm.service';
import { Module } from '@nestjs/common';
import { Todo } from 'src/bad-todo/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoAlarmService],
  // NotificationService
})
export class TodoModule {}
