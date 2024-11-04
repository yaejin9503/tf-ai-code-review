import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TodoService } from 'src/bad-todo/todo.service';
import { TodoAlarmService } from '../services/todo-alarm.service';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from 'src/bad-todo/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly todoAlarmService: TodoAlarmService,
  ) {}

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoService.createTodo(createTodoDto);
  }

  @Get('date/:date')
  async findTodosByDate(@Param('date') date: string): Promise<Todo[]> {
    return await this.todoService.findTodosByDate(new Date(date));
  }

  @Get('search')
  async searchTodos(@Query('keyword') keyword: string): Promise<Todo[]> {
    return await this.todoService.searchTodos(keyword);
  }

  @Post(':id/alarm')
  async setAlarm(
    @Param('id') id: string,
    @Body('alarmTime') alarmTime: Date,
  ): Promise<void> {
    await this.todoAlarmService.setAlarm(id, alarmTime);
  }
}
