import Navbar from 'components/Navbar';

import AboutUs from 'components/slider';
import { data } from 'components/slider/data';
import Router from 'router';
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Router />
      <AboutUs key={data.length}/>
    </>
  );
}

export default App;
