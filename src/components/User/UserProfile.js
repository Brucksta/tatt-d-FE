import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyTattoos from "./MyTattoos";
import SavedTattoos from "./SavedTattoos";



export default function UserProfile() {
    return (
        <div>
      <div className="flex justify-center mt-10 space-x-60">
      <Link to="/mytattoos"><p>My Tattoos</p></Link> <Link to="/saved"><p>Saved</p></Link>
          </div>
        <Router>
            <Switch>
                <Route exact path="/mytattoos" component={MyTattoos} />  
                <Route exact path="/saved" component={SavedTattoos} />
                  
            </Switch>
        </Router>
        
    </div>
    )
}