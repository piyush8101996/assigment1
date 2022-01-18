
import {BrowserRouter,} from "react-router-dom";
import Header from "./components/header/Header";
import Pageroute from "./Route/Pageroute";

function App() {
  return (
    
      <BrowserRouter>
      <Header/>
      <Pageroute/>
      </BrowserRouter>
  
  );
}

export default App;
