import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "src/components/PrivateRoute";
import { Suspense, lazy } from "react";
import { RouteI } from "src/models/router";
import { RoutePath } from "src/enums/routePath";

const Home = import("../pages/Home");

const routes: RouteI[] = [
  {
    path: RoutePath.HOME,
    Component: lazy(() => Home),
    isPrivate: false,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(
        ({ Component, isPrivate, path, privateRouteProps, children }) => {
          if (isPrivate) {
            return (
              <PrivateRoute {...privateRouteProps}>
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  }
                >
                  {children?.map(
                    (
                      {
                        path: childPath,
                        Component: ChildComponent,
                        props: childProps,
                      },
                      childIndex,
                    ) => (
                      <Route
                        key={childIndex}
                        path={childPath}
                        element={
                          <Suspense fallback={null}>
                            <ChildComponent {...childProps} />
                          </Suspense>
                        }
                      />
                    ),
                  )}
                </Route>
              </PrivateRoute>
            );
          }

          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              }
            />
          );
        },
      )}
    </Routes>
  );
};

export default AppRouter;
