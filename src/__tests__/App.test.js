// import React from 'react'
// import ReactDOM from 'react-dom';
// import App from '../components/App';

// it('shows a comment box', ()=>{
//     const div = document.createElement('div');
//     // ReactDOM.render(<h1>AAA</h1>, div);
//     ReactDOM.render(<App/>, div);

//     console.log(div.innerHTML);
//     expect(div.innerHTML).toContain('Comment Boxx');
//     expect(div.innerHTML).toBeTruthy();



//     ReactDOM.unmountComponentAtNode(div);
// });





import React from 'react';
import App from '../components/App';
import AddComment from '../components/comments/AddComment';
import CommensList from '../components/comments/CommentsList';
import {shallow} from 'enzyme';

let component;

beforeEach(()=>{
    component = shallow(<App/>);
});

it("shows a comment box", ()=>{
    expect(component.find(AddComment).length).toEqual(1);
})

it("shows a comment list", ()=>{
    expect(component.find(CommensList).length).toEqual(1);
})


























