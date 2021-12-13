import {Route, Switch} from "react-router-dom";
import { NotFound } from "../utilities/lazy";

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} />}
      />
    );
  }
  
  export function RenderRoutes({ routes }) {
      return (
          <Switch>
              {routes.map((route, index) => {
                  return <RouteWithSubRoutes key={index} {...route} />;
              })}
              <Route component={() => <NotFound/>} />
          </Switch>
      );
    }