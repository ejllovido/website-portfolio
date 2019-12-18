import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import ShowcaseBody from "./components/ShowcaseBody";
import ExerciseBody from "./components/ExerciseBody";

function App() {
  return (
    <div className="main-wrapper">
      <div className="inner">
        <Navbar />
        <div className="body">
          <Switch>
            <Route path="/" exact component={HomeBody} />
            <Route path="/showcase" component={ShowcaseBody} />
            <Route path="/exercise" component={ExerciseBody} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
