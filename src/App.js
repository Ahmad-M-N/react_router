import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, NavLink, Route, Outlet, RouterProvider } from 'react-router-dom';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Home from './Components/Home';
import Layout from './Components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="page1" element={<Page1/>}/>
      <Route path="page2" element={<Page2/>}/>
    </Route>
  )
);

function App() {

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
