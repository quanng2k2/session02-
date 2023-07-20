import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    try {
      const contents = await readFile('messages.json', 'utf8');
      const messages = JSON.parse(contents);

      return messages[id];
    } catch (error) {
      // Handle error (e.g., console.log and/or return a default value)
      console.error('Error reading or parsing messages.json:', error);
      return null;
    }
  }

  async findAll() {
    // Logic to return all messages
    try {
      const contents = await readFile('messages.json', 'utf8');
      const messages = JSON.parse(contents);
      return messages;
    } catch (error) {
      // Handle error (e.g., console.log and/or return a default value)
      console.error('Error reading or parsing messages.json:', error);
      return null;
    }
  }

  async create(content: string) {
    try {
      const contents = await readFile('messages.json', 'utf8');
      const messages = JSON.parse(contents);

      const id = Math.floor(Math.random() * 9999);

      messages[id] = { id, content };
      await writeFile('messages.json', JSON.stringify(messages));
    } catch (error) {
      // Handle error (e.g., console.log and/or return null)
      console.error('Error creating message:', error);
      return null;
    }
  }
}
