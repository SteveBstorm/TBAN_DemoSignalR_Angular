import { Article, ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  label! : string
  price! : number
  description! : string

  constructor(
    private _artService : ArticleService
  ) { }

  ngOnInit(): void {
  }

  envoi() {
    this._artService.ajout({label : this.label, description : this.description, price : this.price})
  }

}
