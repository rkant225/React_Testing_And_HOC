import React from 'react';
import {connect} from 'react-redux';

// HOC Function, ChildComponentis recieved as a parameter
const requireAuthHOC = (ChildComponent) => {
    //Create a Class component, whichwill be returnedat the end
    class ComposedComponent extends React.Component{
        componentDidMount(){
            this.navigateToHomeIfNotLoggedIn();
        }
    
        componentDidUpdate(){
            this.navigateToHomeIfNotLoggedIn();
        }
    
        navigateToHomeIfNotLoggedIn = () =>{
            if(!this.props.isLoggedIn){
                this.props.history.push('/');
            }
        }

        //Simply return ChildComponent in render method, DON'T forgot to passthe props Other wise chain will be broken. 
        render(){
            return (
                <ChildComponent {...this.props}/>
            );
        }
    }

    const mapStateToProps = (state) =>{
        return{
            isLoggedIn : state.AuthReducer.isLoggedIn
        }
    }

    // Return the ComposedComponent
    return connect(mapStateToProps,{})(ComposedComponent);
}

//export HOC as Function
export default requireAuthHOC;