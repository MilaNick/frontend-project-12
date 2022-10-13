import {createContext, useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import Main from 'screens/Main';
import Layout from 'ui/Layout';
import Login from 'screens/Login';
import SignUp from "screens/SignUp";
import NotFoundPage from 'screens/NotFoundPage';
import ProtectedRoute from "components/ProtectedRoute";

import './App.scss';

const screens = [
  {path: '/', component: Main, accessLevel: 'auth'},
  {path: '/login', component: Login, accessLevel: 'no-auth'},
  {path: '/signup', component: SignUp, accessLevel: 'no-auth'},
  {path: '*', component: NotFoundPage, accessLevel: 'any'},
]

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setAuth({ token, username });
    }
  }, [])
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    setAuth(null);
    navigate('/login');
  }
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          {screens.map(({path, component: Component, accessLevel}) => {
            return(
              <Route
                key={path}
                path={path}
                element={(
                  <ProtectedRoute accessLevel={accessLevel}>
                    <Component/>
                  </ProtectedRoute>
                )}
              />)}
            )
          }
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
