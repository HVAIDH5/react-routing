import React from "react";

import About from "./components/About";
import Nav from "./components/nav";
import Shop from "./components/Shop";
import Home from "./components/home";
import { BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
<BrowserRouter>
  
    <div>
      <Nav />
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About />}/>
     <Route path="/shop" element={<Shop />}/>
     </Routes>
      
</div>   
</BrowserRouter>
  );
}




export default App;


   