import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';


export default () => {
  // const store = createStore(
  //   combineReducers({
  //   	posts: postsReducer
  //   })
  // );
  const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
  );

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducers, enhancers);
  return store;
};


