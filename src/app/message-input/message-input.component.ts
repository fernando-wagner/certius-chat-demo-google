import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {

  constructor(public messageService: MessageService) { }

  onClickMe(box: HTMLInputElement) {
    if (box.value.trim() !== '') {
      this.messageService.writeMessage(box.value.trim());
    }
    box.value = '';
  }

  onEnter(box: HTMLInputElement) {
    if (box.value.trim() !== '') {
      this.messageService.writeMessage(box.value.trim());
    }
    box.value = '';
  }

  getInputStatus(): string {
    return this.messageService.getMessageWindowService().getInputStatus();
  }


}
