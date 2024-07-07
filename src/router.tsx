import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CraeteProjectView from "./views/projects/CreateProjectView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route
            path="/projects/create"
            element={<CraeteProjectView />}
            index
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
