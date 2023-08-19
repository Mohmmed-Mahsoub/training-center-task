import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./pages/notFound.page";
import ShowAllCourses from "./pages/showAllCourses.page";
import AddCourse from "./pages/addCourse.page";
import AddStudent from "./pages/addStudent.page";
import EditCourse from "./pages/editCourse.page";
import ShowAllStudents from "./pages/showAllStudents.page";
import ShowCourse from "./pages/showCourse.page";
import ShowStudent from "./pages/showStudent.page";
import Layout from "./components/general/layout/layout.component";
import "bootstrap/dist/css/bootstrap.min.css";

const routeConfigurations = [
  { path: "/notFound", element: <NotFound /> },
  { path: "/addCourse", element: <AddCourse /> },
  { path: "/addStudent", element: <AddStudent /> },
  { path: "/editCourse/:id/", element: <EditCourse /> },
  { path: "/showAllStudents", element: <ShowAllStudents /> },
  { path: "/showCourse/:id/", element: <ShowCourse /> },
  { path: "/showStudent/:id/", element: <ShowStudent /> },
  { path: "/", exact: true, element: <ShowAllCourses /> },
  { path: "/showAllCourses", element: <Navigate to="/" /> },
  { path: "*", element: <Navigate to="/notFound" /> },
];

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          {routeConfigurations.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
