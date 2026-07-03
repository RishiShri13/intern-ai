import { Routes, Route } from "react-router-dom";

import Landing from "@/pages/Landing/Landing";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}