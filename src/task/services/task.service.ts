import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  findAll() {
    return this.taskRepo.find();
  }
  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }
  create(body: any) {
    //const newTask = this.taskRepo.create(body);
    const newTask = new Task();
    newTask.title = body.title;
    return this.taskRepo.save(newTask);
  }
  async update(id: number, body: any) {
    const task = await this.taskRepo.findOne(id);
    body.updatedAt = new Date(Date.now());
    this.taskRepo.merge(task, body);
    return this.taskRepo.save(task);
  }
  async delete(id: number) {
    await this.taskRepo.delete(id);
    return true;
  }
}
