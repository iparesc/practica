import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const END_POINT = "http://192.168.0.42:3000";


@Injectable()
export class ServicioService {
  
  
  constructor( public http: HttpClient) { 
    
    console.log('servicioService constructor');
  }


  getTodos():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT + '/todos';
    console.log(`servicioService getTodos ${url}`);
    return this.http.get(url);

  }

  getTodo(id):Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT + '/todos/'+ id;
    console.log(`TodosService getTodos ${url}`);
    return this.http.get(url);

  }

}