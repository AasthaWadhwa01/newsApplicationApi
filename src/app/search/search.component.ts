import { Component } from '@angular/core';
import  { NewsService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],      
   providers: [NewsService]
})
export class SearchComponent {
  news: any=[];
  post: any[];

  data: any={};

  list: any=[];

  favourite: any={};
	constructor(private newsService: NewsService){}
	ngOnInit(){
		this.newsService.searchNewsChannel()
		.subscribe((post)=>{
			this.post=post.sources;
			console.log(post.sources)
		});
	}

	getDetails(newsChannel){
		this.newsService.searchEntries(newsChannel.value)
					.subscribe(news => {
					this.news = news.articles;

				})
	}

	addNews(data){
         console.log(data)
         this.data={
         "title":data.title        
         };
         this.newsService.save(this.data).subscribe((data:any)=>{
         console.log(data);
         })
}


	showFavorites(){
		this.newsService.showFavList()
       .subscribe((data)=>{
         this.list=data;
       })
	}

}
