import {Route, Routes} from "react-router-dom";

import Main from 'screens/Main'
import NotFoundPage from 'screens/NotFoundPage'
import Layout from 'ui/Layout'
import Login from 'screens/Login'

import './App.css';


const screens = [
  {path: '/', elem: <Main/>},
  {path: '/login', elem: <Login/>},
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
