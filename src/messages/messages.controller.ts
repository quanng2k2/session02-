import { MessagesService } from './message.service';
import {
  Controller,
  Get,
  Post,
  Body,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async getMessages() {
    const messages = await this.messagesService.findAll();
    return messages;
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messagesService.create(body.content);
  }
}
