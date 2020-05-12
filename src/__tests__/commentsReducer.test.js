import commentsReducer from '../Redux/reducers/commentsReducer';

const initialState = {comments : []};

it('handles actions of type ADD properly', ()=>{
    const action = {type :  'ADD', payload : 'new comment 1'}
    const newState = commentsReducer(initialState, action);
    expect(newState.comments).toEqual(['new comment 1']);
})

it('handles action with unknown type',()=>{
    const action = {type :  'LDFDSFSDFASD'};
    const newState = commentsReducer(initialState, action); 
    expect(newState.comments).toEqual([]);
})