import Header from './Components/Header-Page/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Home-Page/HomePage';
import myDatabase from './My-database/myDatabase.json'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { createContext, useState } from 'react';
import AboutPage from './Components/About-Page/AboutPage';
import NotFound from './Components/Not-Found-Page/NotFound';
import AllService from './Components/Services-Page/AllService';
import DashBoard from './Components/Dashboard/DashBoard';

export const coursesContext=createContext()
function App() {
  const[courses,setCourses]=useState(myDatabase);
  console.log(courses)
  return (
    <coursesContext.Provider value={[courses,setCourses]}>
    <Router>
    <Header/>
     <Switch>
     <Route exact path="/about">
    <AboutPage/>
     </Route>
     <Route exact path="/dashboard">
    <DashBoard/>
     </Route>
     <Route exact path="/service">
    <AllService/>
     </Route>
     <Route exact path="/reveiw">
    <AboutPage/>
     </Route>
     <Route exact path="/">
    <HomePage/>
     </Route>
     <Route exact path="*">
    <NotFound/>
     </Route>
     </Switch>
     <Footer/>
    </Router>
    </coursesContext.Provider>
  );
}

export default App;
