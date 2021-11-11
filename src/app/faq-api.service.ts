import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { HeroService } from '../hero.service';

@Injectable({
  providedIn: 'root'
})
export class FaqApiService {
  private url = " https://returnqueen.com/admin/api/faq_data/list_faq";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
}
