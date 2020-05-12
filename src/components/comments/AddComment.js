import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';

import requireAuthHOC from '../Utils/requireAuthHOC';

class AddComment extends React.Component {
    state = {comment : ""}

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.AddComment(this.state.comment);
        this.setState({comment : ""})
    }

    render(){
        return (
            <div>
                 <h2>Add a comments</h2>

                <form onSubmit={this.submitHandler}>
                    <textarea value={this.state.comment} onChange={(e)=>this.setState({comment : e.target.value})}></textarea>
                    {/* <button onClick={()=>{
                        this.props.AddComment(this.state.comment);
                        this.setState({comment : ""})
                        }}>Add</button> */}
                    <button type='submit'>Submit</button>
                </form>
                <button className="fetch-comments" onClick={this.props.FetchCommentAction}>Fetch Comments fromserver</button>
            </div>
        );
    }
  
}


export default connect(null,{AddComment : Actions.AddComment, FetchCommentAction : Actions.FetchComment})(requireAuthHOC(AddComment));