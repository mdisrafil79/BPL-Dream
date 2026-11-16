import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Players from './components/Players/Players';
import { Suspense } from 'react';
import type { Iplayer } from './types/Player';


const playersFetch = async (): Promise<Iplayer[]> =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const playersPromise = playersFetch();
  return (
    <>
    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </div>
    </>
  )
}

export default App
