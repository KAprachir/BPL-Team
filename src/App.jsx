import { Suspense, useState } from "react";
import "./App.css";
import Available from "./assets/componants/available/Available";
import Navbar from "./assets/componants/navbar/Navbar";
import Players from "./assets/componants/Players/Players";
import { ToastContainer } from "react-toastify";
import Hero from "./assets/componants/Hero/Hero";
import Footer from "./assets/componants/Footer/Footer";
import PreFooter from "./assets/componants/Footer/PreFooter";

const fetchPlayer = async () => {
  const res = await fetch("players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>

      <PreFooter></PreFooter>

      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
