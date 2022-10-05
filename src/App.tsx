import { Toaster } from "react-hot-toast";
import Router from "router";
import "./App.css";


function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
