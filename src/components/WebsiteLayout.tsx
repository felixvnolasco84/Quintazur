import { NavLink, Outlet } from "react-router";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { ModalProvider } from "./providers/modal-provider";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
 

function WebsiteLayout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <ModalProvider />
      <div className="fixed bottom-0 right-0 p-4">          
        <NavLink to={"https://wa.me/5622008895"} target="_blank">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-md bg-green-500 border-green-500 text-white"
            aria-label="Open menu"
        >
          <FaWhatsapp className="h-6 w-6" />
        </Button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
