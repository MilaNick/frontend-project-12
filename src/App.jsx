import React, { createContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Chats from 'screens/Chats';
import Login from 'screens/Login';
import Main from 'screens/Main';
import NotFoundPage from 'screens/NotFoundPage';
import ProtectedRoute from 'components/ProtectedRoute';
import SignUp from 'screens/SignUp';
import Layout from 'components/Layout';

import './App.scss';
import ActivePopup from './components/ActivePopup';

const screens = [
  { path: '/', component: Main, accessLevel: 'auth' },
  { path: '/chats', component: Chats, accessLevel: 'auth' },
  { path: '/chats/:channelId', component: Chats, accessLevel: 'auth' },
  { path: '/login', component: Login, accessLevel: 'no-auth' },
  { path: '/signup', component: SignUp, accessLevel: 'no-auth' },
  { path: '*', component: NotFoundPage, accessLevel: 'any' },
];

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      return { token, username };
    }
    return null;
  });
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    setAuth(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {screens.map(({ path, component: Component, accessLevel }) => (
            <Route
              key={path}
              path={path}
              element={(
                <ProtectedRoute accessLevel={accessLevel}>
                  <Component />
                  <ToastContainer />
                </ProtectedRoute>
                )}
            />
          ))}
        </Route>
      </Routes>
      <ActivePopup />
    </AuthContext.Provider>
  );
}

export default App;
