import NavBar from "../src/components/NavBar";
import Product from "../src/components/Product";
import CheckoutPage from "../src/components/CheckoutPage";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import {useState } from "react";
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Checkout from "./components/CheckoutForm/Checkout";



function App() {

//  const[{user}, dispatch] = useStateValue();

// useEffect(()=>{
//   onAuthStateChanged((auth)=>{ 
//     console.log(auth);
//     if(auth)
//     {dispatchEvent({
//       type:actionType.SET_USER,
//       user: auth,
//     })}
//   })
// },[])
const [user, setUser] = useState({});

onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser);
});



  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>            
          <Route path="/checkout-page" element={<CheckoutPage/>}/>        
          <Route path="/" element={<Product />}/>
          <Route path="/checkout" element={<Checkout />}/>         
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
