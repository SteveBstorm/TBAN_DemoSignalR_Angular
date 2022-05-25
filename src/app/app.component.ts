import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _artService : ArticleService) {}

  ngOnInit(): void {
    this._artService.connecting()
  }
  title = 'TBANDemoSignalR';
}
