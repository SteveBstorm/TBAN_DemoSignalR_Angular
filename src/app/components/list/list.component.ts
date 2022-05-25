import { Article, ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  liste : Article[] = []
  constructor(
    private _artService : ArticleService
  ) { }

  ngOnInit(): void {
    this._artService.articleHub.on("articleListUpdated", () => this.fetchData())
    this.fetchData()
  }

  fetchData() {
    this._artService.getall().subscribe({
      next : (data : Article[]) => this.liste = data
    })
  }

}
