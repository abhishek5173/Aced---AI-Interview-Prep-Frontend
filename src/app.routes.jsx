import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import Landing from "./features/interview/pages/Landing";
import PublicOnly from "./features/auth/components/PublicOnly";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicOnly><Login /></PublicOnly>
},
{
    path: "/register",
    element: <PublicOnly><Register /></PublicOnly>
},
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/app",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/interview/:interviewId",
    element: (
      <Protected>
        <Interview />
      </Protected>
    ),
  },
]);
