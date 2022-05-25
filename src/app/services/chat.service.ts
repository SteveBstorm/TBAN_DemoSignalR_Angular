import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import * as signalr from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  myhub! : signalr.HubConnection

  messageList : Message[] = []
  listSubject : Subject<Message[]> = new Subject<Message[]>()

  emitList() {
    this.listSubject.next(this.messageList)
  }
  constructor(
    private _client : HttpClient
  ) { }

  connecting() {
    this.myhub = new signalr.HubConnectionBuilder().withUrl(environment.baseurl + "chat").build()

    this.myhub.start()
    .then(() => {
      console.log('connexion au chat établie')
      this._client.get<Message[]>(environment.baseurl+"api/chat").subscribe({
        next : (data : Message[]) => {
          this.messageList = data
          this.emitList()
        }
      })
    } )
    .catch((error) => console.log('ça aurait pu passer mais : ' + error))

    this.myhub.on("messageSending", (message : Message) => {
      this.messageList.push(message)
      this.emitList()
    })

  }

  send(newmessage : Message) {
    this.myhub.send("SendMessage", newmessage)
  }
}

export interface Message {
  id : number
  sender : string
  content : string
}
