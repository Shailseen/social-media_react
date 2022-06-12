import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import SuggestionsCard from "./components/SuggestionsCard/SuggestionsCard";
function App() {
  const location = useLocation();
  const path = location.pathname;
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className={`grid ${path==='/' ? "grid-cols-1" : "grid-col-5"}`} >
        <div className={`col-start-1 col-end-2 hidden ${ path ==='/' ? "hidden" : "block"} md:block`} >
          <SideNav />
        </div>
        <div className={`col-start-2 col-end-4 mx-auto ${path==='/' && "mx-auto w-fit border-8"}`}>
          <Outlet />
        </div>

        {user && <div className={`hidden col-start-4 col-end-5 ${ path ==='/' ? "hidden" : "block"} lg:block`}>
          <SuggestionsCard />
        </div>}
      </div>
    </>
  );
}

export default App;
