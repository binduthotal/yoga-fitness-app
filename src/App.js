import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Breathing from './components/Breathing';
import Contact from './components/Contact';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/breath",
      element: <Breathing/>
    },
    {
      path:"/contact",
      element: <Contact/>
    }

  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
