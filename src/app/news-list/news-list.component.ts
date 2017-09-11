import { Component,Input } from '@angular/core';
import  { NewsService } from '../search/search.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
	@Input() newslist:any;
 data: any={};
  constructor(private newsService: NewsService) { }

  

addNews(data){
         console.log(data)
         this.data={
         "title":data.title        
         };
         this.newsService.save(this.data).subscribe((data:any)=>{
         console.log(data);
         })
}
}
