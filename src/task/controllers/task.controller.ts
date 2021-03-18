import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskService } from './../services/task.service';

@Controller('api/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }
  @Post()
  create(@Body() body: any) {
    return this.taskService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
