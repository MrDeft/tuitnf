
import React from 'react'
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import about from "./component/about";
import teacher from './component/teacher';
import curriculum from './component/curriculum';
import home from './component/Home';
import employees from './component/employees';
import Head from './component/head';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App">
        <Head />
        <Header />
        <Routes>
          <Route
            path="/"
            Component={home}
          />
          <Route
            path="/about/"
            Component={about}
          />
          <Route
            path="/teacher/"
            Component={teacher}
          />
          <Route
            path="/employees/"
            Component={employees}
          />
          <Route
            path="/curriculum/"
            Component={curriculum}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
