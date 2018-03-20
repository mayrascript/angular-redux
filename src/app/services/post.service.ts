import { Injectable } from '@angular/core';
import {PostModel} from './store/post.model';
import {AppState} from './store/reducers';
import { NgRedux } from '@angular-redux/store';
import {ADD_POST, REMOVE_ALL_POSTS, REMOVE_POST} from './store/actions';

@Injectable()
export class PostService {

  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  create(post: PostModel) {
    this.ngRedux.dispatch({type: ADD_POST, post: post});
  }

  remove(post: PostModel) {
    this.ngRedux.dispatch({type: REMOVE_POST, post: post });
  }

  removeAll() {
    this.ngRedux.dispatch({type: REMOVE_ALL_POSTS});
  }
}
