import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }
  
  myfunction() {
  	console.log("123");
  	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    	var myObj = { 'userId' : "123", 'url' : "123" };
    	var myJSON = JSON.stringify(myObj);
    	const request = this.http.put("http://localhost:3000/photo/upload", myJSON, options).map(response => {
      		console.log(response);
    	});
    	request.subscribe();
    }
  }


}
