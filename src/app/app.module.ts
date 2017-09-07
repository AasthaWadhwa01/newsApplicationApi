import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsService } from './app.service' 
import { AppComponent } from './app.component';
import { Http }       from '@angular/http';
import { HttpModule }  from '@angular/http';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
