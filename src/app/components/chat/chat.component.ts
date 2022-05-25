import { ChatService, Message } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message! : string
  sender! : string
  messageList : Message[] = []
  constructor(
    private _chat : ChatService
  ) { }

  ngOnInit(): void {
    this._chat.listSubject.subscribe({
      next : (data : Message[]) => this.messageList = data
    })
    this._chat.emitList()
    this._chat.connecting()
  }

  send() {
    this._chat.send({content :this.message, sender : this.sender, id : 0 })
    this.message = ''
  }

}
