import React from 'react';
import {connect} from 'react-redux';

class CommensList extends React.Component {

    render(){
        return (
            <React.Fragment>
                <h3>Comment List</h3>
                <ul>
                    {this.props.comments && this.props.comments.map(comment => {
                        return(
                            <li key={`${comment}_${Math.random()}`}> {comment} </li>
                        );
                    })}
                </ul>
            </React.Fragment>
            
        );
    }
  
}

const mapStateToProps = (state)=>{
    return{
        comments : state.commentsReducer.comments
    }
}

export default connect(mapStateToProps,{})(CommensList);