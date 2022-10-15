import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { Toaster } from "react-hot-toast";
import Router from "router";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {token ? <Navbar /> : <NavBarLoginRegister />}
      <Router />
    </>
  );
}

export default App;
