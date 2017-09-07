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

	results: Object;

	constructor(private newsService: NewsService){}

	getDetails(news){
		this.newsService.searchEntries(news.value)
				.subscribe(results => {
					this.results = results.results;
					
				})
	}

  title = 'app';
}