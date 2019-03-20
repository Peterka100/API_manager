import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {Ibackend} from "./backend/backend";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getBackends(): Observable<Ibackend[]>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJjbnB3NHhsanJjaWJlenR2dGVnMnNnNWFiYiIsImV4cCI6MTU1MzAxMDk1OSwianRpIjoiYWp6bml1ZHJpZGl5djBoaG50b3VyNG9hcmUifQ.FHDaTJ6qAwuN3kyyA3WkOhDKlCrwMlJ-XKVwFgfnGQ4');

    return this.http.get<Ibackend[]>('https://www.csas.cz/webapi/api/v3/admin/backends/fzyolwubo2jzpywigvwruujgxp', {headers})
  }

}

