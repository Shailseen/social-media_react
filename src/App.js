import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
// background-color: rgba(255, 255, 255, .15);  
//  backdrop-filter: blur(5px);