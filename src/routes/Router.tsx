import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Videos from "./Videos";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
