import { Suspense } from "react";
import "./App.css";
import Available from "./assets/componants/available/Available";
import Navbar from "./assets/componants/navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Available playerPromise={playerPromise}></Available>
      </Suspense>
    </>
  );
}

export default App;
