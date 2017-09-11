import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsService } from './search/search.service' 
import { AppComponent } from './app.component';
import { Http }       from '@angular/http';
import { HttpModule }  from '@angular/http';
import { SearchComponent } from './search/search.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavListComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
