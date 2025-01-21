import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Alert from './components/Alert';

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);


  const [mode,setMode] = useState('light');
  // const [alert , setAlert] = useState(null);

  // const showAlert = (message,type) => {
  //   setAlert({
  //     msg: message,
  //     type:type
  //   })

  //   setTimeout(() => {
  //       setAlert(null);
  //   }, 1500);
  // }

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
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
            </>
          }
        />
        <Route
          path="business"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />
            </>
          }
        />
        <Route
          path="entertainment"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
            </>
          }
        />
        <Route
          path="health"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />
            </>
          }
        />
        <Route
          path="science"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />
            </>
          }
        />
        <Route
          path="sports"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />
            </>
          }
        />
        <Route
          path="technology"
          element={
            <>
              <NavBar mode={mode} toggleMode={toggleMode} />
              <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
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














  //createBrwoeserRouter
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/> ,
  //   },
  //   {
  //     path: "/business",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />,
  //   },
  //   {
  //     path: "/entertainment",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />,
  //   },
  //   {
  //     path: "/health",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />,
  //   },
  //   {
  //     path: "/science",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />,
  //   },
  //   {
  //     path: "/sports",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />,
  //   },
  //   {
  //     path: "/technology",
  //     element: <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />,
  //   },
  // ]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route >
  //         <Route
  //           path = "/"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
  //         />
  //         <Route
  //           path="business"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}
  //         />
  //         <Route
  //           path="entertainment"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
  //         />
  //         <Route
  //           path="health"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}
  //         />
  //         <Route
  //           path="science"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}
  //         />
  //         <Route
  //           path="sports"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}
  //         />
  //         <Route
  //           path="technology"
  //           element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}
  //         />
  //       </Route>
  //     </>
  //   )
  // );












//SWITCH  
//     return (
//       <div>
//         {/* <Router> */}
//           <NavBar mode={mode} toggleMode={toggleMode} /> 
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={progress} 
//           />
// {/*       
//         <Switch>
//           <Route exact path="/">
//             <News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
//           </Route> 
//           <Route exact path="/business"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch> */}
//         {/* </Router> */}
//       </div>
//     )
