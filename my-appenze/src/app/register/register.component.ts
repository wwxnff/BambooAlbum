import { HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  password_again: string = "";
  no_info: boolean = false;
  incorrect: boolean = false;

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  register() {
  	this.no_info = false;
  	this.incorrect = false;
  	if (this.username === '' || this.password === '' || this.password_again === '') {
      this.no_info = true;
      this.username = "";
      this.password = "";
      this.password_again = "";
    }
    else if (this.password_again !== this.password) {
      this.incorrect = true;
      this.username = "";
      this.password = "";
      this.password_again = "";
    }
    else {
    	const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    	var myObj = { 'userId' : this.username , 'password' : this.password};
    	var myJSON = JSON.stringify(myObj);
    	const request = this.http.post("/register", myJSON, options)
    		.map(response => {
    		if (response['info'] === "success") {
    			this.router.navigateByUrl("/login");
    		}
      });
    request.subscribe();
    }
  }
}
