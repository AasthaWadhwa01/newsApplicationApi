import { Component } from '@angular/core';
import  { NewsService } from '../search/search.service';


@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent  {
list: any=[];
  constructor(private newsService: NewsService) { }

 showFavorites(){
		this.newsService.showFavList()
       .subscribe((data)=>{
         this.list=data;
         console.log(this.list)
       })
	}


   deleteItem(id){
    this.newsService.delete(id).subscribe((data)=>{
      this.list=data;
    })

  }
}
