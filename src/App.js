import React, { Suspense, Fragment } from "react";
import { createTheme } from "../src/theme";
import { Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { createBrowserHistory } from "history";
import PageLoading from "../src/component/PageLoading";
import AuthGuard from "./component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
function App() {
  const theme = createTheme();
  const history = createBrowserHistory();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <RenderRoutes data={routes} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
