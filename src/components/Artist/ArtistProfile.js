import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ArtistBooking from "./ArtistBooking";
import Flash from "./ArtistFlash";
import ArtistTattoos from "./ArtistTattoos";

export default function ArtistProfile() {
  let { path, url } = useRouteMatch()

  return (
    <div>
    <div className="flex justify-center mt-10 space-x-60">
      <Link to={`${url}/artisttattoos`}><p className="text-yellow-500">
        Tattoos</p>
      </Link>{" "}
      <Link to={`${url}/artistflash`}><p className="text-yellow-500">
        Flash</p>
      </Link>{" "}
      <Link to={`${url}/booking`}><p className="text-yellow-500">
        Book</p>
      </Link>
    </div>
    
    <Switch>
      <Route exact path={`${path}/artisttattoos`} component={ArtistTattoos} />
      <Route exact path={`${path}/artistflash`} component={Flash} />
      <Route exact path={`${path}/booking`} component={ArtistBooking} />
  
    </Switch>

    </div>
  );
}
