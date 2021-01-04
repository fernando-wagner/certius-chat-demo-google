import { MessageOutput } from './messageoutput';
import { Injectable } from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import {Message} from './message';
import { ChatBotService} from './chat-bot.service';
import {GetSessionResponse} from './get.session.response';


@Injectable({
  providedIn: 'root'
})
export class MessageWindowService {

  inputStatusDisabled = '';
  messages: Message[] = [];
  currentReponse: MessageOutput;
  jsonConvert: JsonConvert = new JsonConvert();
  currentFamilyNumber = 0;
  sessionId: GetSessionResponse;

  constructor(protected chatBotService: ChatBotService) {
  this.jsonConvert.operationMode = OperationMode.LOGGING;
  this.jsonConvert.ignorePrimitiveChecks = false;
  this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
  this.jsonConvert.ignoreRequiredCheck = true;
  this.chatBotService.getSession().subscribe( res => {
    console.log(res);
    this.sessionId = res;
    this.messages.push(new Message('Hola. Como puedo ayudarlo?', 'assistant'));
  });
  }


  add(message: string, displayInput: boolean = true) {
    console.log(this.sessionId);
    this.disableInput();
    if (displayInput) {
      this.messages.push(new Message(message, 'user'));
    }
    this.chatBotService.sendMessage(message.replace(/\r?\n|\r/g, ''), this.sessionId.sessionId).subscribe(res => {
      console.log(JSON.stringify(res, null, 2));
      this.currentReponse = this.jsonConvert.deserializeObject(res, MessageOutput);
      for (const value of this.currentReponse.getMessageList()) {
        if (value.getResponseType() === 'text') {
          this.messages.push(new Message(value.getText(), 'assistant'));
        } else if (value.getResponseType() === 'option') {
          this.messages.push(new Message(value.getTitle(), 'assistant'));
          for (const button of value.getOptions()) {
            const mess = new Message(button.getLabel(), 'assistant');
            mess.turnIntoButton(this.currentFamilyNumber, button.getText());
            this.messages.push(mess);
          }
          this.currentFamilyNumber += 1;
        } else if (value.getResponseType() === 'suggestion') {
          this.messages.push(new Message(value.getTitle(), 'assistant'));
          for (const button of value.getSuggestions()) {
            const mess = new Message(button.getLabel(), 'assistant');
            mess.turnIntoButton(this.currentFamilyNumber, button.getLabel());
            this.messages.push(mess);
          }
          this.currentFamilyNumber += 1;
        }
      }
      this.enableInput();
    });
  }

  enableInput(): void {
    this.inputStatusDisabled = '';
  }

  disableInput(): void {
    this.inputStatusDisabled = 'true';
  }

  getInputStatus(): string {
    return this.inputStatusDisabled;
  }

  clear() {
    this.messages = [];
  }

}
