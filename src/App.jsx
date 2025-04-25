import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";

import AppLayout from "./UI/AppLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Project from "./pages/Projects/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
