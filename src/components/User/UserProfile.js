import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyTattoos from "./MyTattoos";
import SavedTattoos from "./SavedTattoos";



export default function UserProfile() {
    let { path, url } = useRouteMatch()

    return (
        <div>
      <div className="flex justify-center mt-10 space-x-60">
      <Link to={`${url}/mytattoos`}><p>My Tattoos</p></Link> <Link to={`${url}/saved`}><p>Saved</p></Link>
          </div>
       
            <Switch>
                <Route exact path={`${path}/mytattoos`} component={MyTattoos} />  
                <Route exact path={`${path}/saved`} component={SavedTattoos} />
            </Switch>
       
        
    </div>
    )
}