import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  MyPhotoList: Array<string> = [];
  MyTags: Array<string> = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
  	this.get_all_photos();
  }
  


  myfunction() {
  	window.open("https://randestudio.github.io", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=800,left=800,width=800,height=800");
  }

  add_tag() {
  	var tag: string = "";
  	tag =  (<HTMLInputElement>document.getElementById("search")).value;
  	console.log(tag);
  	this.MyTags.push(tag);
  	(<HTMLInputElement>document.getElementById("search")).value = "";
  }

  send_tags() {
  	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    var myObj = { 'userId' : 'finaltest', 'tags' : this.MyTags };
    var myJSON = JSON.stringify(myObj);
    const request = this.http.post("http://localhost:3000/photo/filter", myJSON, options)
    .map(response => {
    	this.MyPhotoList = response['urls'];
        console.log(response);
      });
    request.subscribe();
  }

  get_all_photos() {
  	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    var myObj = {'userId' : 'finaltest'};
    var myJSON = JSON.stringify(myObj);
    const request = this.http.post("http://localhost:3000/photo/all", myJSON, options)
    .map(response => {
    	this.MyPhotoList = response['urls'];
        console.log(response);

      });
    request.subscribe();
  }

}
