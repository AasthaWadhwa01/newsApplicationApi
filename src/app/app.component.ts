import { Component } from '@angular/core';
import { NewsService } from './app.service';
import  { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService]
})
export class AppComponent {

	news: any=[];

	constructor(private newsService: NewsService){}

	getDetails(newsChannel){
		this.newsService.searchEntries(newsChannel.value)
					.subscribe(news => {
					this.news = news.articles;

				})
	}

  title = 'app';
}