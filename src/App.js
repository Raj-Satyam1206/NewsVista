import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = "us";
  const [progress, setProgress] = useState(0);
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode has been enabled","success");
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <LoadingBar height={3} color="#f11946" progress={progress} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />
            </>
          }
        />
        <Route
          path="business"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />
            </>
          }
        />
        <Route
          path="entertainment"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />
            </>
          }
        />
        <Route
          path="health"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />
            </>
          }
        />
        <Route
          path="science"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />
            </>
          }
        />
        <Route
          path="sports"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />
            </>
          }
        />
        <Route
          path="technology"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />
            </>
          }
        />
      </>
    )
  );

  return (
    <div>
      {/* <NavBar mode={mode} toggleMode={toggleMode} />  */}
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <RouterProvider router ={router}/>
    </div>
  );
  
};

export default App;
