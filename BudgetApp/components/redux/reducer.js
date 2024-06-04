// reducers.js
import { combineReducers } from 'redux';

const inputValuesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        [action.payload.inputName]: action.payload.value
      };
    default:
      return state;
  }
};

const savedValuesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_INPUT_VALUES':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  inputValues: inputValuesReducer,
  savedValues: savedValuesReducer
});

export default rootReducer;
