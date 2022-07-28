import { BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import View from "@pages/View";
import Comics from "@pages/Comics";
import Login from "@pages/Login";
import Signup from "@pages/Signup";

import { getUser } from '@services/tokenService'

import {
  GuardConfigProvider,
  GuardProvider,
  GuardedRoute,
  GuardedRoutes,
  type GuardMiddleware
} from 'react-router-guarded-routes'

const loginGuard: GuardMiddleware = (_to, _from, next) => {
  const user = getUser()
  if(user) {
    next()
  } else {
    next('/login')
  }
}

function App() {
  return (
    <BrowserRouter>
    <GuardConfigProvider>
      <GuardProvider>
        <GuardedRoutes>
            <GuardedRoute index element={<Home />} />
            // TODO: Switch to more syntactically awesome nested routes, currently broken.
            {/* <GuardedRoute guards={[loginGuard]} path="/comics" >
              <GuardedRoute index element={<Comics />} />
              <GuardedRoute path=":id" element={<View />} />
            </GuardedRoute> */}
            <GuardedRoute guards={[loginGuard]} path="/comics" element={<Comics />} />
            <GuardedRoute guards={[loginGuard]} path="/comics/:id" element={<View />} />

            <GuardedRoute path="/login" element={<Login />} />
            <GuardedRoute path="/signup" element={<Signup />} />
        </GuardedRoutes>
      </GuardProvider>
    </GuardConfigProvider>
    </BrowserRouter>
  );
}

export default App;
