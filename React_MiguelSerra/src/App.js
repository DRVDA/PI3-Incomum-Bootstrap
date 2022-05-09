import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./view/Index";
import PacksPersonalizados from "./view/PacksPersonalizados";
import PacksEscolhidos from "./view/PacksEscolhidos";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Index} />
        <Route path="/packsPersonalizados" component={PacksPersonalizados} />
        <Route path="/packsEscolhidos" component={PacksEscolhidos} />
      </div>
    </Router>
  );
}
export default App;
