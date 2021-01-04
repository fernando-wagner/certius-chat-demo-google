import { Component, OnInit } from '@angular/core';
import { MessageWindowService } from '../message-window.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {


  constructor(public messageWindowService: MessageWindowService) { }

  ngOnInit() {
  }

  onClick(message: Message) {
    if ((message.isButton) && (!message.getClicked())) {
      for (const mess of this.messageWindowService.messages) {
        if (mess.getFamily() === message.getFamily()) {
          mess.clickButton();
          if (mess.getTextOnClick() === message.getTextOnClick()) {
            mess.optionSelected();
            console.log('Pushing: ' + message.getTextOnClick());
            this.messageWindowService.add(message.getTextOnClick(), false);
          }
        }
      }
    }
  }

  scroll(): void {
    const elem = document.getElementById('messageContainer');
    elem.scrollTo({
      top: elem.scrollHeight,
      behavior: 'smooth'
    });
  }


}
