import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import  { NewsService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  news: any=[];
  post: any[];

 /* data: any={};*/
  /*list: any=[];*/
  favourite: any={};

constructor(private newsService: NewsService){}
  @Output() newslist= new EventEmitter<any>();
	
  ngOnInit(){

    

		this.newsService.searchNewsChannel()
		.subscribe((post)=>{
			this.post=post.sources;
			console.log(post.sources)
		});

    this.newsService.searchlatest()
          .subscribe(news => {
          this.news = news.articles;
          this.newslist.emit(this.news);

        })
	}

	getDetails(newsChannel){
		this.newsService.searchEntries(newsChannel.value)
					.subscribe(news => {
					this.news = news.articles;
          this.newslist.emit(this.news);

				})
	}

	/*addNews(data){
         console.log(data)
         this.data={
         "title":data.title        
         };
         this.newsService.save(this.data).subscribe((data:any)=>{
         console.log(data);
         })
}
*/
	/*showFavorites(){
		this.newsService.showFavList()
       .subscribe((data)=>{
         this.list=data;
       })
	}*/
}