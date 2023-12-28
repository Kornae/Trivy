import React from 'react';
import './App.css';
import Home from './components/Home';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizLayout from './components/QuizLayout';
import { dataLoader } from './components/QuizTemplate';
import About from './pages/About';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<QuizLayout />} loader={dataLoader} />
        <Route path="/about" element={<About />} />

      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => {
  return <>
    <div>
      <Link to='/'> </Link>
      <Link to='/explore'></Link>
      <Link to='/about'></Link>
    </div>

    <div>
      <Outlet />
    </div>
  </>
}
export default App;