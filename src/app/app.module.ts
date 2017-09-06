import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsService } from './app.service' 
import { AppComponent } from './app.component';
import { Http }       from '@angular/http';
import { HttpModule }  from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
