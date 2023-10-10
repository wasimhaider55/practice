import changeTheNumber from "./upDown";


import { combineReducers }  from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    // you can create multiple reducer here
    // like this example 

    // changeTheBackground
    // changeTheImage
})

export default rootReducer ; 