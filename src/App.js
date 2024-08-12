import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Breathing from "./components/Breathing";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import DoYogaWithAi from "./components/DoYogaWithAi";
import Header from "./components/Header";
import Body from "./components/Body";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/doYoga",
          element: <DoYogaWithAi />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/breath",
          element: <Breathing />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorComponent />, // Wildcard route to catch all undefined routes
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Header />
      </RouterProvider>
    </Provider>
  );
}

export default App;
