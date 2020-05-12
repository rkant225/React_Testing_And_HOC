import React from 'react';
import AddComment from '../components/comments/AddComment';
import {mount} from 'enzyme';

import Root from '../Root';

let component;

beforeEach(()=>{
    component = mount(<Root><AddComment/></Root>);
});

afterEach(()=>{
    component.unmount();
});

it('has a textArea and two button',()=>{
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
})



describe('the textarea', ()=>{

    beforeEach(()=>{
        component.find('textarea').simulate('change', { target : {value : 'new comment'}});
        component.update();
    })


    it('has a textarea where user can enter comment', ()=>{
        expect(component.find('textarea').prop('value')).toEqual('new comment');
    });
    
    
    it('textarea must be cleared on clicking ADD button',()=>{
        expect(component.find('textarea').prop('value')).toEqual('new comment');
    
        //component.find('button').simulate('click');
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
})