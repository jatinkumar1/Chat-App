import { Link } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User ,MessageSquareReply} from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import LogoutButton from "./sidebar/LogoutButton";

const Navbar = () => {
  const { logout, authUser,showChat, setShowChat } = useAuthContext();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0  z-40
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-14 bg-slate-500">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center justify-center hover:opacity-80 transition-all">
              <div className="size-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (

              <>

                {showChat && (
                  <div className="block lg:hidden md:hidden">
                  <button onClick={() => setShowChat(false)} className="btn btn-sm gap-1">
                    <MessageSquareReply className="size-5"/>
                  </button>
                  </div>
                )}
                <Link to={"/profile"} className={`btn btn-sm gap-1`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-1 items-center" onClick={logout}>
                  <span className=""><LogoutButton/></span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;