import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import CommentsList from '../components/comments/CommentsList';

let component;
// this is the initial data that we are passing to our Redux-Store
const initialState = {commentsReducer : {comments : ['comment1', 'comment2']}}

beforeEach(()=>{
    component = mount(<Root initialState={initialState}><CommentsList/></Root>);   
});


it('displays the comments',()=>{
    expect(component.find('li').length).toEqual(initialState.commentsReducer.comments.length);
});


it('shows the correct text for each comment', ()=>{
    initialState.commentsReducer.comments.forEach(comment =>{
        expect(component.render().text()).toContain(comment);
    });
})