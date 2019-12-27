import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";
import UsersList from "./components/users-list.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UsersList} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/users"  component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
