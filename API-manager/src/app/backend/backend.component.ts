import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BackendService} from '../backend.service';


@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})

export class BackendComponent implements OnInit {

  public backend = [];

  constructor(private http: HttpClient,  public backendService: BackendService) {
  }

  ngOnInit() {
  }

  checkBackend() {
    this.backendService.getBackends()
      .subscribe(data => {(this.backend = data);
      console.log(this.backend);
      });
  }

}


    /*
        let obs = this.http.get('https://api.github.com/users/koushikkothagal');
        obs.subscribe(( response )=> console.log(response));
      }

      getGithubinfo() {
        let params = new HttpParams().set('userId', '1');

        this.posts = this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts', {params});
      // this.posts.subscribe(( response ) => console.log(response));
      }

  getBackend() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJjbnB3NHhsanJjaWJlenR2dGVnMnNnNWFiYiIsImV4cCI6MTU1Mjk5NTA1NiwianRpIjoiZXVqMjJramFhbWl5ZjBsbHB6cHBzY3F5dHkifQ.0NjGdLba2uESyVB_cx0S_EXp0jCW-7MCo8xGjzutJRc');

    return this.http.get('https://www.csas.cz/webapi/api/v3/admin/backends/fzyolwubo2jzpywigvwruujgxp', {headers})
      .subscribe(data => {
        console.log(data);
    })
  }
  */

