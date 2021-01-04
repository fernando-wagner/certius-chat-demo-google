import { Injectable } from '@angular/core';
import { MessageWindowService } from './message-window.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messageWindowService: MessageWindowService) { }

  writeMessage(message: string): void {
    this.messageWindowService.add(message);
  }

  getMessageWindowService(): MessageWindowService {
    return this.messageWindowService;
  }

}
