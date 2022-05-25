
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleHub! : HubConnection

  constructor(
    private _client : HttpClient
  ) { }

  connecting() {
    this.articleHub = new HubConnectionBuilder().withUrl(environment.baseurl+"article").build()

    this.articleHub.start().then(() => console.log("connexion établie"))

    this.articleHub.on("articleListUpdated", () => alert('nouvel article ajouté'))
  }

  ajout(newArticle : Article){
    this._client.post(environment.baseurl+ "api/article", newArticle).subscribe({
      next : () => console.log("article ajouté")
    })
  }

  getall() : Observable<Article[]> {
    return this._client.get<Article[]>(environment.baseurl+"api/article")
  }
}

export interface Article {
  label : string
  description : string
  price : number
  id? : number
}
