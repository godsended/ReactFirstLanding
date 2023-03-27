import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { NavBarItemData } from './Components/Navbar/NavBarItem';

function App() {
  let navBarItems: NavBarItemData[] = [
    { title: "Home", href: "#home" },
    { title: "About Me", href: "#about_me" },
    { title: "Skills", href: "#skills" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contacts", href: "#contacts" }
  ];
  return (
    <NavBar items={navBarItems} />
  );
}

export default App;