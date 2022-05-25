import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import * as signalr from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  myhub! : signalr.HubConnection

  messageList : Message[] = []
  constructor() { }

  connecting() {
    this.myhub = new signalr.HubConnectionBuilder().withUrl(environment.baseurl + "chat").build()

    this.myhub.start()
    .then(() => console.log('connexion établie'))
    .catch((error) => console.log('ça aurait pu passer mais : ' + error))

    this.myhub.on("messageSending", (message : Message) => this.messageList.push(message))

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
