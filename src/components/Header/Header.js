import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/actions';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/post">Add comment</Link></div>
                <button onClick={this.props.HandleAuthAction}>{this.props.isLoggedIn ? 'LogOut' : 'Login'}</button>
            </div>
        );
    }  
}

const mapStateToProps = (state) =>{
    return{
        isLoggedIn : state.AuthReducer.isLoggedIn
    }
}

export default connect(mapStateToProps,{HandleAuthAction : Actions.HandleAuth})(Header);
