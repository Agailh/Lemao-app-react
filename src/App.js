import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <SignIn />
      <SignUp />
      <Home />
      <About />
      <Product />
    </>
  );
}

export default App;
