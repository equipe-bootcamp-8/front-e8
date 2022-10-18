import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { useAuth } from "contexts/auth";
import { Toaster } from "react-hot-toast";
import Router from "router";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const { logged } = useAuth(); //Se tirar isso aqui a navbar para de ficar dinamica, deixar até achar uma solução melhor
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {token ? <Navbar /> : <NavBarLoginRegister />}
      <Router />
    </>
  );
}

export default App;
