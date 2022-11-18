import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({ posts });

/* The reducer is being used here, via the combineReducers function. When you export default combineReducers here, it is imported in the index.js file in the src, via: import reducers from './reducers'.

The reducer is imported in the main index.js file - the one in the src folder.

*/