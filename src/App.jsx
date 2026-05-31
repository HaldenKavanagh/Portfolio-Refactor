import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-mist antialiased selection:bg-mint/30">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
