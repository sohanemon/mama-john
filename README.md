## Back to home route

```js
if (window.location.pathname !== "/") window.location.pathname = "/";
```

> go to route page at any cost. Alternative to Netlify's \_redirects

## Deal firebase error

```js
export const sliceError = (error) => {
  return error.message.split("/")[1].split(")")[0].replaceAll("-", " ");
};
```

## Avoid too much useContext Definition

```js
// working directory

import { useContext } from "react";
import { UserContext } from "./user-provider";

const { loginWithGoogle } = useContext(UserContext);
```

use as follow

```js
// root directory
const useUser = () => useContext(UserContext);

// working directory

const { loginWithGoogle } = useUser();
```

## Redirect to previous path after private route

- navigate with state & replace

```js
//private route.jsx
const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  if (user?.uid) return children;

  return <Navigate state={{ pathname }} to={"/login"} replace></Navigate>;
  // navigated from pathname
  // passing a props named state
};
```

> state props will be injected to the location of `/login`

- get the pathname

```js
// login.jsx
const {
  state: { pathname },
} = useLocation();
// or
const location = useLocation();
const pathname = location?.state?.pathname;
```

- now we know the previous location and go with

```js
//login.jsx
setTimeout(() => navigate(pathname || "/"), 100);
```
