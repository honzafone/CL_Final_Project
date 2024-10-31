import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { auth } from './firebase'; // Ujistěte se, že máte správnou cestu
import { onAuthStateChanged, signOut } from "firebase/auth";

import About from "./pages/About";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Exclusive from "./pages/Exclusive";

import ViewEarth from "./pages/ViewEarth";
import ViewSun from "./pages/ViewSun";
import ViewMercury from "./pages/ViewMercury";
import ViewVenus from "./pages/ViewVenus";
import ViewMars from "./pages/ViewMars";
import ViewJupiter from "./pages/ViewJupiter";
import ViewSaturn from "./pages/ViewSaturn";
import ViewUranus from "./pages/ViewUranus";
import ViewNeptune from "./pages/ViewNeptune";
import Test from "./pages/Test";
import Register from './components/Register';
import Login from './components/Login';

import "./App.css";
import SolarSystem from './pages/Pokus';

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
    <main className="h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exclusive" element={<Exclusive />} />
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
            <Route path="test" element={<Test />} />  
            <Route path="sun" element={<ViewSun />} />  
          </Route>
        </Routes>

        {/* Zobrazení stavu přihlášení v pravém dolním rohu jako NavLink */}
        <NavLink 
          to={isAuthenticated ? '#' : '/login'} // Přesměrování na /login, pokud není přihlášen
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
