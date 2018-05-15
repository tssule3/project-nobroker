import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services.service';
import {Observable} from 'rxjs/Observable';
import {PostsModel} from '../../postsModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postsArray: PostsModel[];
  constructor(private ser: ServicesService) {
    this.ser.getMethod().subscribe(
      (data) => {
        this.postsArray = data;
      }
    );
  }

  ngOnInit() {
  }

}
