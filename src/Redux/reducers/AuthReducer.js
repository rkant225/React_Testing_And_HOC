const initialState =  {isLoggedIn : false};

const AuthReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'TOGGLE_AUTH_STATUS':
            return{
                ...state,
                isLoggedIn : !state.isLoggedIn
            }
        default:
            return state;
    }
}

export default AuthReducer;