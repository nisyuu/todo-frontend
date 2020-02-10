import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Top from '../components/Top';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Top} />
    </BrowserRouter>
  );
};
export default Router;