import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryNewsPage from './pages/CategoryNewsPage';
import Navbar from './Navbar'

const App = () => {
  const [country, setCountry] = useState("in");
  const [search, setSearch] = useState("");
  return (
    <>
    <Navbar setCountry={setCountry} country={country} setSearch={setSearch} />
    <Routes>
      <Route path='/' element={<HomePage country={country} search={search} />} />
      <Route path='/:category' element={<CategoryNewsPage country={country} search={search} />} />
    </Routes>
    </>
  )
}

export default App