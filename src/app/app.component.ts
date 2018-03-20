import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import {PostModel} from './services/store/post.model';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: PostModel;

  @select() posts;

  constructor(private postService: PostService) {
    this.post = {
      title: 'Title 1',
      description: 'Description of post 1'
    };
  }

  createPost() {
    console.log('createPost')
    this.postService.create(this.post);
  }
  removePost(post: PostModel) {
    this.postService.remove(post);
  }
  removeAll(){
    this.postService.removeAll();
  }
}
