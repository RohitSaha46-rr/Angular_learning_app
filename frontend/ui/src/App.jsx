// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Content from './components/Content';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='/' element={<Dashboard/>}/>
          <Route 
            path="/content" 
            element={
              <PrivateRoute>
                <Content />
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
   
  );
};

export default App;
