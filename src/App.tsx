import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { useAuth } from "contexts/auth";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Router from "router";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const { logged } = useAuth(); //Se tirar isso aqui a navbar para de ficar dinamica, deixar até achar uma solução melhor
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Toaster position="bottom-center" reverseOrder={false} />
      {token ? <Navbar /> : <NavBarLoginRegister />}
      <Router />
    </>
  );
}

export default App;
