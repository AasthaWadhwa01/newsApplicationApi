import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
     
@Injectable()
 export class NewsService {
   constructor(private http: Http) {}
     
searchEntries() {
  return this.http
     .get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=983847a33bfc4179943d980daedd4142')
        .map(response => response.json());
      }
    }
