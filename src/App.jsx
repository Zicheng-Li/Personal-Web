import React from "react";
//drop-shadow(0 0 2em #646cffaa);
import {createBrowserRouter, RouterProvider, Route, Outlet,ScrollRestoration} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Outlet /></>,
   
    children: [
      { path: "/", element: <><HomePage /><Footer /></>  }, 
      { path: "experiences", element: <><ExperiencePage /><Footer /></>  },
      { path: "projects", element: <><ProjectsPage /><Footer /></>  },
      { path: "notes", element: <><NotesPage /><Footer /></>  },
      { path: "contact", element: <><ContactPage /><Footer /> </> }
    ],
  },
],{
  basename: "/Personal-Web/"
}
);

const App = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        
        position: "relative",
      }}
    >
      

      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
};

export default App;
