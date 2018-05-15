import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PostsModel} from './postsModel';

@Injectable()
export class ServicesService {
// url to perform http operations
  postsUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }
  // get request
  getMethod(): Observable<PostsModel[]> {
   return this.http.get<PostsModel[]>(this.postsUrl);
  }
  // post request
  postMethod() {}
}
