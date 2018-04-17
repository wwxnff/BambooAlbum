import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  MyPhotoList: Array<string> = [];
  MyTags: Array<string> = [];

  constructor(public http: HttpClient, private toastr: ToastrService,  private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  	this.get_all_photos();
  }
  
  myfunction() {
  	window.open("popup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=800,left=800,width=800,height=800");
  }


  register() {
      const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
      var myObj = { 'userId' : this.username , 'password' : this.password};
      var myJSON = JSON.stringify(myObj);
      const request = this.http.post("/register", myJSON, options)
        .map(response => {
          this.router.navigateByUrl("/login");
      });
    request.subscribe();
  }

  add_tag() {
  	var tag: string = "";
  	tag =  (<HTMLInputElement>document.getElementById("search")).value;
  	if (tag === "") {
  		this.showSuccess();
  	}
  	else {
  		console.log(tag);
  		this.MyTags.push(tag);
  		(<HTMLInputElement>document.getElementById("search")).value = "";
  		this.send_tags();
  	}
  }

  showSuccess() {
    this.toastr.error('Cannot enter an empty tag', '', {
      timeOut: 3000
    });
  }

  send_tags() {
  	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    var myObj = { 'userId' : 'finaltest', 'tags' : this.MyTags };
    var myJSON = JSON.stringify(myObj);
    const request = this.http.post("/photo/filter", myJSON, options)
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
    const request = this.http.post("/photo/all", myJSON, options)
    .map(response => {
    	this.MyPhotoList = response['urls'];
        console.log(response);

      });
    request.subscribe();
  }

  delete_tags() {
  	this.MyTags = [];
  	this.get_all_photos();
  }

  delete_photo(delete_url: any) {
  	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    var myObj = { 'userId' : 'finaltest', 'url' : delete_url };
    var myJSON = JSON.stringify(myObj);
    const request = this.http.post("/photo/delete", myJSON, options)
    .map(response => {
        console.log(response);
      });
    request.subscribe();
    this.get_all_photos();
  }

  delete_all() {
  	for (var i = 0; i < this.MyPhotoList.length; i++) {
  		this.delete_photo(this.MyPhotoList[i]);
  	}
  }
}
