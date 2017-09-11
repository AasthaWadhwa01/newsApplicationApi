import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public newslist: any;

	updateNewslist(event){
		console.log(event)
		this.newslist=event
	}
}