import { BrowserRouter } from "react-router-dom";
import { createContext, useState, type Dispatch, SetStateAction } from "react";
import Home from "@pages/Home";
import View from "@pages/View";
import Comics from "@pages/Comics";
import Login from "@pages/Login";
import Signup from "@pages/Signup";

import { getUser, type User } from "@services/tokenService";

import {
  GuardConfigProvider,
  GuardProvider,
  GuardedRoute,
  GuardedRoutes,
  type GuardMiddleware,
} from "react-router-guarded-routes";

export const UserContext =
  createContext < ReturnType < typeof useState < User >>> [undefined, () => {}];
const loginGuard: GuardMiddleware = (_to, _from, next) => {
  console.log("I got called, here to guard with my react muscle");
  const user = getUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
};

function App() {
  const [user, setUser] = useState<User | undefined>(getUser());

  const loginGuard: GuardMiddleware = (_to, _from, next) => {
    if (user) {
      next();
    } else {
      next("/login");
    }
  };

  return (
    <BrowserRouter>
      <GuardConfigProvider>
        <GuardProvider>
          <UserContext.Provider value={[user, setUser]}>
            <GuardedRoutes>
              <GuardedRoute index element={<Home />} />
              // TODO: Switch to more syntactically awesome nested routes,
              currently broken.
              {/* <GuardedRoute guards={[loginGuard]} path="/comics" >
                <GuardedRoute index element={<Comics />} />
                <GuardedRoute path=":id" element={<View />} />
              </GuardedRoute> */}
              <GuardedRoute
                guards={[loginGuard]}
                path="/comics"
                element={<Comics />}
              />
              <GuardedRoute
                guards={[loginGuard]}
                path="/comics/:id"
                element={<View />}
              />
              <GuardedRoute path="/login" element={<Login />} />
              <GuardedRoute path="/signup" element={<Signup />} />
            </GuardedRoutes>
          </UserContext.Provider>
        </GuardProvider>
      </GuardConfigProvider>
    </BrowserRouter>
  );
}

export default App;
