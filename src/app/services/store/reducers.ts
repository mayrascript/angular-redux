import {PostModel} from './post.model';
import {ADD_POST, REMOVE_ALL_POSTS, REMOVE_POST} from './actions';

export interface AppState {
  posts: PostModel[];
}

export const INITIAL_STATE: AppState = {
  posts: []
};

export function rootReducer(state: AppState, action): AppState {

  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, {
        posts: state.posts.concat(Object.assign({}, action.post))
      });
    case REMOVE_POST:
      return Object.assign({}, state, {
        posts: state.posts.filter(t => t.title !== action.post.title)
      });
    case REMOVE_ALL_POSTS:
      return Object.assign({}, state, {
        posts: []
      });
  }
  return state;
}
