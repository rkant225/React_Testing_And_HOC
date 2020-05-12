import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute_Version_one =({componentToRender : Component, ...props}) =>{
    return (
        <Route {...props} render={(routeProps)=>{
            return props.isLoggedIn ? <Component/> : <Redirect to="/" />;
        }}/>
    );
}

const mapStateToProps = (state) =>{
    return{
        isLoggedIn : state.AuthReducer.isLoggedIn
    }
}

export default connect(mapStateToProps,{})(ProtectedRoute_Version_one);
