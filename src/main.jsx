import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AboutMe />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
