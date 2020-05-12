const initialState = {comments : []};
const commentsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "ADD" :
            return{
                ...state,
                comments : [...state.comments, action.payload]
            }
        case "FETCH_COMMENT":
            return{
                ...state,
                comments : [...state.comments, ...action.payload.data.map(d => d.setup)]
            }
        default :
            return state

    }
}

export default commentsReducer;