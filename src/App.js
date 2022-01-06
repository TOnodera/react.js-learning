import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" component={ProductPage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
