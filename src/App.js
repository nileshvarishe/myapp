import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import itemContext from "./context/itemContext";
import menuData from "./menu-data.json";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  const [items, setItems] = useState(menuData);

  return (
    <BrowserRouter>
      <itemContext.Provider value={[items, setItems]}>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/item/:id" component={ItemPage} />
            </Switch>
          </header>
        </div>
      </itemContext.Provider>
    </BrowserRouter>
  );
}

export default App;
