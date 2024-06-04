// actions.js
export const setInputValue = (inputName, value) => ({
    type: 'SET_INPUT_VALUE',
    payload: { inputName, value }
  });
  
  export const saveInputValues = (values) => ({
    type: 'SAVE_INPUT_VALUES',
    payload: values
  });
  

// import { ADD_ITEM } from "./constants";

// export function additem(item){
//     return{
//         type:ADD_ITEM,
//         data:item
//     }
// }