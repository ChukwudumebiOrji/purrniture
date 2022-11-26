import React, { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./contexts/store"

const Home = lazy(() => {
  return import("./pages/Home")
})
const Login = lazy(() => {
  return import("./pages/Login")
})
const Register = lazy(() => {
  return import("./pages/Register")
})
const NotFound = lazy(() => {
  return import("./pages/NotFound")
})
const ForgotPassword = lazy(() => {
  return import("./pages/ForgotPassword")
})
const Dashboard = lazy(() => {
  return import("./pages/Dashboard")
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={
        <Suspense>
          <NotFound />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      ></Route>
      <Route path="auth">
        <Route
          path="login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="register"
          element={
            <Suspense>
              <Register />
            </Suspense>
          }
        ></Route>
        <Route
          path="forgot-password"
          element={
            <Suspense>
              <ForgotPassword />
            </Suspense>
          }
        ></Route>
      </Route>
      <Route path="admin">
        <Route
          path="dashboard"
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        ></Route>
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <div className=" font-manrope">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
