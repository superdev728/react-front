import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';

const APP = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<FirstPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  </Router >
)

export default APP;