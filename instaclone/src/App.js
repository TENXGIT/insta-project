import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Post from './components/post/Post';
import Inputs from './components/form/Form';
import Landing_page from './components/LandingPage/landing_page';
import Post_view from'./components/PostView/post_view';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    
      <BrowserRouter>
      <Routes>
     <Route path="landing_page" element={<Landing_page/>}/>
     <Route path="post_view" element={ <Post_view/>}/>
     <Route path="Form" element={<Inputs/>}/>
     <Route path="Post" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
