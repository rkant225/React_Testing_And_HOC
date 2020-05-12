import {AddComment} from '../Redux/actions';

describe('AddComment Action',()=>{
    it('returns an action with type of ADD',()=>{
        const action = AddComment("new comment 1");
        expect(action.type).toEqual('ADD')
    });

    it('returns an action with correct payload',()=>{
        const action = AddComment("new comment 1");
        expect(action.payload).toEqual("new comment 1")
    });
})