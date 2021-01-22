import React from "react";
import { Switch, Route } from "react-router-dom";
import Input from "./Components/Inputs";
import DetailPage from "./Components/DetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Input} />
        <Route path="/detailpage" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
