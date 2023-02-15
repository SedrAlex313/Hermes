import { Routes, Route } from "react-router-dom";

import Home from "./routers/home.component";
import Navigation from "./routers/Navigation/navigation.component";
import SignIn from "./routers/Sign-in/Sign-in.component";
const Shop = () => {
  return <h2> I'm the shop page</h2>;

  };
 
const App =  () => {
 
   return (
    <Routes>
      <Route path='/' element = {<Navigation />}>
         <Route index element = {<Home />}/>
         <Route path='shop' element = {<Shop />}/>
         <Route path='sign-in' element = {<SignIn />}/>
      </Route>
     </Routes>
   ) 
};

export default App;