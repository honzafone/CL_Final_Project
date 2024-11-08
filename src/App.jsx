import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Exclusive from "./pages/Exclusive";

import Register from './components/Register';
import Login from './components/Login';

import Models from "./pages/Models";
import SolarSystem from './pages/SolarSystem';
import ViewMercury from "./pages/ViewMercury";
import ViewVenus from "./pages/ViewVenus";
import ViewEarth from "./pages/ViewEarth";
import ViewMars from "./pages/ViewMars";
import ViewJupiter from "./pages/ViewJupiter";
import ViewSaturn from "./pages/ViewSaturn";
import ViewUranus from "./pages/ViewUranus";
import ViewNeptune from "./pages/ViewNeptune";
import ViewSun from "./pages/ViewSun";
import BlackHole1 from './models/BlackHole';

import StarWars from "./pages/SW";
import ATATModel from './models/ATAT';
import XWingModel from './models/XWing';
import BD1Model from './models/BD-1';
import HologramModel from './models/Hologram';
import ATSTModel from './models/ATST';
import DeathStar1 from './models/DeathStar';
import TIEHunterModel from './models/TieHuHunter';
import ATTEModel from './models/ATTE';
import R2D2Model from './models/R2D2';
import TIEFighterModel from './models/TieFighter';
import MillenniumFalconModel from './models/MilleniumFalcon';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    window.location.assign('/');
  };

  return (
    <main className="h-full w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exclusive" element={<Exclusive />} />
          <Route path="/sw" element={<StarWars />} >
            <Route index element={<HologramModel />} />
            <Route path="bd-1" element={<BD1Model />} />
            <Route path="deathstar" element={<DeathStar1 />} />
            <Route path="atst" element={<ATSTModel />} />
            <Route path="atat" element={<ATATModel />} />
            <Route path="xwing" element={<XWingModel />} />
            <Route path="tiehunter" element={<TIEHunterModel />} />
            <Route path="atte" element={<ATTEModel />} />
            <Route path="r2d2" element={<R2D2Model />} />
            <Route path="tiefighter" element={<TIEFighterModel />} />
            <Route path="milleniumfalcon" element={<MillenniumFalconModel />} />

          </Route>
          <Route path="/models" element={<Models />}>
            <Route index element={<SolarSystem />} />
            <Route path="mercury" element={<ViewMercury />} />
            <Route path="venus" element={<ViewVenus />} />
            <Route path="earth" element={<ViewEarth />} />
            <Route path="mars" element={<ViewMars />} />
            <Route path="jupiter" element={<ViewJupiter />} />
            <Route path="saturn" element={<ViewSaturn />} />
            <Route path="uranus" element={<ViewUranus />} />
            <Route path="neptune" element={<ViewNeptune />} />
            <Route path="sun" element={<ViewSun />} />
            <Route path="blackhole" element={<BlackHole1 />} />
          </Route>
        </Routes>

        {/* login in state bottom right corner */}
        <NavLink
          to={isAuthenticated ? '#' : '/login'} //redirrect to /login if not authenticated
          onClick={isAuthenticated ? handleLogout : null}
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer',
            backgroundColor: isAuthenticated ? 'green' : 'red',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            zIndex: 9999,
            textDecoration: 'none',
          }}
        >
          {isAuthenticated ? 'Logged' : 'Not Logged'}
        </NavLink>
      </Router>
    </main>
  );
}

export default App;
