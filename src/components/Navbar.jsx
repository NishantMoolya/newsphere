import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ country, setCountry, setSearch }) => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="/" style={{ fontWeight: '700' }}>Nishnews</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link" aria-current="page" href="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/business'} className="nav-link" href="/">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/entertainment'} className="nav-link" href="/">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/sports'} className="nav-link" href="/">Sports</NavLink>
                        </li>
                        <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                            <select name="region" style={{ padding: '0.2rem', borderRadius: '0.2rem' }} onChange={(e) => setCountry(e.currentTarget.value)}>
                                <option value="us" selected={country === 'us' ? true : false}>USA</option>
                                <option value="in" selected={country === 'in' ? true : false}>India</option>
                                <option value="gb" selected={country === 'gb' ? true : false}>UK</option>
                            </select>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e) =>{ e.preventDefault();setSearch(searchInput);}}>
                        <input className="form-control me-2" value={searchInput} type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchInput(e.currentTarget.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar