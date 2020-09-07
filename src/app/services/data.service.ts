import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getList(url: string) {
  
    if(url.startsWith("http://")){
      console.log('Fetching Data URL:'+url);
      return this.http.get(url);
    } else {
      console.log('Fetching Data URL:'+environment.apiUrl + url);
      return this.http.get(environment.apiUrl + url);
    }
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export interface Movie {
  title: string;
  url: string;
  year: number;
  img: string;
  description: string;
  duration: string;
  directedBy: string;
producedBy: string;
musicBy:string;

}
