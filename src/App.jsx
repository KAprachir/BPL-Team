import { Suspense, useState } from "react";
import "./App.css";
import Available from "./assets/componants/available/Available";
import Navbar from "./assets/componants/navbar/Navbar";
import Players from "./assets/componants/Players/Players";

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
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
