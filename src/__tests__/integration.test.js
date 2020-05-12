import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://official-joke-api.appspot.com/random_ten', {
        status : 200,
        response : [
            {
                id: 333,
                type: "general",
                setup: "Why did the Clydesdale give the pony a glass of water?",
                punchline: "Because he was a little horse!"
            },
            {
                id: 23,
                type: "programming",
                setup: "Why do programmers always mix up Halloween and Christmas?",
                punchline: "Because Oct 31 == Dec 25"
            },
            {
                id: 244,
                type: "general",
                setup: "What do you get when you cross a snowman with a vampire?",
                punchline: "Frostbite."
            }]
    });
});

afterEach(()=>{
    moxios.uninstall();
});

it('can fetch comments and display them properly', (done)=>{
    //Attempt to render entire app
    const component = mount(<Root><App/></Root>)
    //find the fetch comment button and click it
    component.find('.fetch-comments').simulate('click');

    //expect to find a list of 10 comments, also we have to introduce a delay
    moxios.wait(()=>{
        component.update();
        expect(component.find('li').length).toEqual(3);
        done();
        component.unmount();
    });
    // alternate way to add delay :)
    // setTimeout(()=>{
    //     component.update();
    //     expect(component.find('li').length).toEqual(3);
    //     done();
    //     component.unmount();
    // },100); 
})