import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepo: MessagesRepository) {}

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async create(content: string) {
    return await this.messagesRepo.create(content);
  }
}
