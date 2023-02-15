import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  templateUrl: './message.component.html',
  styles: [
    '.message-row {margin-bottom:10px}'
  ]
})
export class MessageComponent {

  constructor(private messageService: MessageService){}

  get messages():string[]{
    return this.messageService.messages;
  }
  close(){
    // Close the popup
  }

}
