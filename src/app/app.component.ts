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
	searchTerm = new Subject<string>();

	constructor(private newsService: NewsService){}

	getDetails(){
		this.newsService.searchEntries()
				.subscribe(results => {
					this.results = results.results;
				})
	}

  title = 'app';
}

