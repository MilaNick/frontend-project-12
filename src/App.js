import {Route, Routes} from "react-router-dom";
// import React from "react";

import Main from 'screens/Main';
import Layout from 'ui/Layout';
import Login from 'screens/Login';
import SignUp from "screens/SignUp";
import NotFoundPage from 'screens/NotFoundPage';

import './App.scss';



const screens = [
  {path: '/', elem: <Main/>},
  {path: '/login', elem: <Login/>},
  {path: '/signup', elem: <SignUp/>},
  {path: '*', elem: <NotFoundPage/>},
]

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {screens.map(({path, elem}) => <Route key={path} path={path} element={elem} />)}
      </Route>
    </Routes>
  );
}

export default App;
