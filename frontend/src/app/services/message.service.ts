import { Injectable } from '@angular/core';
import {ReplaySubject,  Observable } from 'rxjs';
import { IMessage } from '../interfaces/message-interface';


@Injectable()

export class MessageService {
  private message: ReplaySubject <IMessage> = new ReplaySubject(1);

  constructor() { }

  showMessage(text, style, timeout) {
    this.message.next(<IMessage>{text, style, timeout});
  }

  getMessage (): Observable<IMessage> {
    return this.message.asObservable();
  }
}
