import { Injectable } from '@angular/core';
import { Http,Response }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

     
@Injectable()
 export class NewsService {
   constructor(private http: Http) {}
     
searchEntries(newsChannel: any) {
  return this.http
     .get('https://newsapi.org/v1/articles?source='+newsChannel+'&sortBy=top&apiKey=983847a33bfc4179943d980daedd4142')
        .map(response => response.json())
        .catch(this.handleError)
      }		
      handleError(err:any){
      	console.log('server error', err);
      	if(err instanceof Response){
      		return Observable.throw(alert(JSON.stringify(err.statusText)|| 'backend server error'));
      	}
      }

      searchNewsChannel(){
      	return this.http.get('https://newsapi.org/v1/sources?language=en')
      	.map(res=>res.json());
      }
    

 searchlatest(){
        return this.http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=983847a33bfc4179943d980daedd4142')
        .map(res=>res.json());
      }



    save(data){
      var expressApi='http://localhost:3001/bookpost'
      console.log(data);
      return this.http.post(expressApi,data)
      .map((res: Response)=>res.json())
}  

    showFavList(){
      var expressApi='http://localhost:3001/bookstore'
      return this.http.get(expressApi)
      .map((res: Response)=>res.json())
    }


    delete(id){
      var expressApi='http://localhost:3001/'+id      
      return this.http.delete(expressApi)
      .map((res: Response)=>res.json())
}  


}