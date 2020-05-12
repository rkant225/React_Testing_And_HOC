import axios from 'axios';

export const AddComment = (comment) =>{
    return {type : 'ADD', payload : comment}
}


//use this for thunk middleware.
// export const FetchComment = () =>{
//     return async (dispatch)=>{
//         const response =  await fetch('https://official-joke-api.appspot.com/random_ten');
//         const data = await response.json();
//         const comments = data.map(com => com.setup)
//         dispatch({type : "FETCH_COMMENT", payload : comments})
//     }
// }

//use this for reduxPromise middleware.
export const FetchComment = () =>{
    const response = axios('https://official-joke-api.appspot.com/random_ten');
    return {type : "FETCH_COMMENT", payload : response}
}

export const HandleAuth =()=>{
    return {type : 'TOGGLE_AUTH_STATUS'}
}