
import React from 'react'
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import about from "./component/about";
import teacher from './component/teacher';
import curriculum from './component/curriculum';
// import di1 from './component/di1';
// import di2 from './component/curs/di2';
// import at1 from './component/curs/at1';
// import at2 from './component/curs/at2';
import home from './component/Home';
import employees from './component/employees';
import Head from './component/head';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App">
        <Head/>
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

          {/* Curs */}

          {/* <Route
            path="/curriculum/di1"
            Component={di1}
          /> */}
          {/* <Route
            path="/curriculum/di2"
            Component={di2}
          />
          <Route
            path="/curriculum/at1"
            Component={at1}
          />
          <Route
            path="/curriculum/at2"
            Component={at2}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
