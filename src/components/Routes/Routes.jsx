import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function PrivateRoute({ component: Component, ...props }) {
  const { state } = useAuthContext();

  if (!state.isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { test: "private route" },
        }}
      />
    );
  }

  return (
    <Route {...props}>
      <Component {...props} />
    </Route>
  );
}

export function AnonRoute({ component: Component, ...props }) {
  const { state } = useAuthContext();

  if (state.isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/users",
          state: { test: "anon route" },
        }}
      />
    );
  }

  return (
    <Route {...props}>
      <Component {...props} />
    </Route>
  );
}
