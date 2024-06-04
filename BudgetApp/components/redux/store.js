// import { combineReducers } from 'redux';
// import rootReducer from './rootReducer'; // Import your rootReducer from the appropriate file

// // Define your store type
// export type RootState = ReturnType<typeof rootReducer>;

// // Import other necessary modules and configurations for your store

// const store = configureStore({
//   reducer: rootReducer // Pass your rootReducer to the store configuration
// });

// export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Import Redux Thunk middleware
// import rootReducer from './reducer';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk) // Apply Redux Thunk middleware
// );

// export default store;


// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';

// const store = configureStore({
//   reducer: rootReducer
// });

// export default store;
