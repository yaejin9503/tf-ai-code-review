import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/bad-todo/todo.entity';
import { Repository } from 'typeorm';
import { ITodoAlarm } from '../interfaces/todo-alarm.interface';

@Injectable()
export class TodoAlarmService implements ITodoAlarm {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    // private readonly notificationService: NotificationService,
  ) {}

  async setAlarm(todoId: string, alarmTime: Date): Promise<void> {
    await this.todoRepository.update(todoId, { alarmTime });
  }

  async sendNotification(todoId: string): Promise<void> {
    const todo = await this.todoRepository.findOne({ where: { id: todoId } });
    if (todo && todo.alarmTime) {
      // await this.notificationService.send(`Todo "${todo.title}" is due!`);
    }
  }
}
