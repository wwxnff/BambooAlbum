import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  no_info: boolean = false;
  incorrect: boolean = false;

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
  	this.no_info = false;
  	this.incorrect = false;
  }

  sendrequest() {
  	this.no_info = false;
  	this.incorrect = false;
  	if (this.username === '' || this.password === '') {
      this.no_info = true;
      this.username = "";
      this.password = "";
    }
    else {
    	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    	var myObj = { 'userId' : this.username , 'password' : this.password};
    	var myJSON = JSON.stringify(myObj);
    	const request = this.http.post("/login", myJSON, options)
    		.map(response => {
    		if (response['info'] === "success") {
    			localStorage.setItem("is_logged_in", "true");
    			this.router.navigateByUrl("/home");
    		}
    		else {
    			this.incorrect = true;
    			this.username = "";
    			this.password = "";
    		}
      });
    request.subscribe();
    }
  }

  nav_to_register() {
  	this.router.navigateByUrl("/register");
  }

}
