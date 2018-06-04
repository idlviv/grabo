import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';
import { IMessage } from '../../../interfaces/message-interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: IMessage;
  show = false;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.message = <IMessage>{};
    this.messageService.getMessage()
      .subscribe(message => {
        this.message = message;
        this.show = true;

        setTimeout(() => this.show = false, message.timeout);
      });
  }
}
