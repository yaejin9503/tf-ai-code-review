import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoCreator } from '../interfaces/todo-creator.interface';
import { ITodoFinder } from '../interfaces/todo-finder.interface';
import { Like, Repository } from 'typeorm';
import { Todo } from 'src/bad-todo/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class TodoService implements ITodoCreator, ITodoFinder {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async findTodosByDate(date: Date): Promise<Todo[]> {
    return await this.todoRepository.find({
      where: { dueDate: date },
    });
  }

  async searchTodos(keyword: string): Promise<Todo[]> {
    return await this.todoRepository.find({
      where: [
        { title: Like(`%${keyword}%`) },
        { description: Like(`%${keyword}%`) },
      ],
    });
  }
}
