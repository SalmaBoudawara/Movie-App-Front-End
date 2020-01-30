import React from "react";
import './App.css';
import Home from "./component/home/Home";
import { Route} from 'react-router-dom'
import Description from "./component/description/Description";



function App () {
 

  return (
    <div className="App">
     <Route exact path="/" component={Home}/>
     <Route exact path="/:id" component={Description}/>
     
    </div>
  );

}
export default App;
