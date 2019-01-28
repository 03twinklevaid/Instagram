import CONSTANTS from '../constants.js';
const initialState = {};
const loginReducer = (state=initialState , action) => {
    switch (action.type){
        case "LOGIN_SUCCESS" :{
            return {...action.data};
        }
        case "RELOAD_PROFILE" : {
            return {...action.data}
        }
        default: {
            return state;        
        }
    }
}
export default loginReducer;