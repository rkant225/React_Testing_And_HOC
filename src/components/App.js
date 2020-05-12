import React from 'react';
import AddComment from './comments/AddComment';
import CommensList from './comments/CommentsList';
import {Route} from 'react-router-dom';
import Header from './Header/Header';
import ProtectedRoute_Version_one from './Utils/ProtectedRoute_Version_one';

function App() {
  return (
    <div>
        <Header />
        {/* <ProtectedRoute_Version_one path="/post" componentToRender={AddComment}/> */}
        <Route path="/post" component={AddComment}/>
        <Route path="/" exact component={CommensList}/>
    </div>
  );
}

export default App;