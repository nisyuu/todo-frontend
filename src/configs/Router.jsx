import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Top from '../components/Top';

const router = createBrowserRouter([
  { path: "/",　element: <Top /> },
]);

export default router;