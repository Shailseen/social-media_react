import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { BottomNav } from "./components/BottomNav/BottomNav";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import SuggestionsCard from "./components/SuggestionsCard/SuggestionsCard";
function App() {
  const location = useLocation();
  const path = location.pathname;
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className={`grid`}>
        {user && (
          <div className={`col-start-1 col-end-2 hidden sm:block`}>
            <SideNav />
          </div>
        )}
        {user ? (
          <div className={`col-start-2 col-end-4 mx-auto`}>
            <Outlet />
          </div>
        ) : (
          <div>
            <Outlet />
          </div>
        )}

        {user && (
          <div className={`col-start-4 col-end-5 hidden xl:block`}>
            <SuggestionsCard />
          </div>
        )}
        {user && (
          <div className="fixed left-0 right-0 bottom-0 sm:hidden">
            <BottomNav />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
