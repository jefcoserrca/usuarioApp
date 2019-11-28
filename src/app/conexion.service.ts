import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,   } from "@angular/common/http";

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
data:any;
  constructor( private http: HttpClient ) {


   }

get(page:number){
const url = `https://reqres.in/api/users?page=${page}`;
const headers= new HttpHeaders({
'Content-Type': 'application/json'
});
 return  this.http.get(url,{headers});

}

delete(user:any) {
  console.log(user);
  const url = `https://reqres.in/api/users/${user}`;
  const headers= new HttpHeaders();
   return  this.http.delete(url,{headers},).subscribe( data => {
     console.log(data);
   }, error => { console.log(error)})
}

update(user:any, user_data: any): Observable<any> {
  console.log(user);
  const url = `https://reqres.in/api/users/${user}`;
const body = user_data;
   return  this.http.patch(url,body, { responseType: 'text' });

}

getUsers(page: number) {

return this.get(page).pipe( map( data => {
  return data;
} ) );

}

}
