import React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import Skills from "../components/Skills";
import WriteUp from "../components/WriteUp";
import Project from "../components/Project";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../components/Gallery";
// import Course from '../pages/Course';
// import FAQ from '../components/FAQ';
// import CourseDetailsPage from '../pages/CourseDetailsPage';
// import LoginPage from '../pages/LoginPage';
// import NoPageFound from '../../NoPageFound';
// import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.SKILLS}`,
        element: <Skills />,
      },
      {
        path: `${ROUTES.WRITEUP}`,
        element: <WriteUp />,
      },

      {
        path: `${ROUTES.ABOUT}`,
        element: <About />,
      },

      {
        path: `${ROUTES.CONTACT}`,
        element: <Contact />,
      },

      {
        path: `${ROUTES.PROJECT}`,
        element:  <Project />,
      },

      {
        path: `${ROUTES.GALLERY}`,
        element: <Gallery />,
      },
      // {
      //   path: "*",
      //   element: <NoPageFound />,
      // },
      // {
      //   path: `${ROUTES.SKILLS}`,
      //   element: <Course />,
      // }

      // ,
      // {
      //   path: `${ROUTES.LOGIN}`,
      //   element: <LoginPage />,
      // }

      // ,
      // {
      //   path: `${ROUTES.REGISTER}`,
      //   element: <RegisterPage />,
      // }

      // ,

      // {
      //   path: `${ROUTES.FAQ}`,
      //   element: <FAQ />,
      // }

      // ,

      // {
      //   path: "/course/:courseId",
      //   element: <CourseDetailsPage />,
      // },
    ],
  },
]);

export default router;