import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return;

    const allCards = [
      ...document.querySelectorAll(".project-card"),
      ...document.querySelectorAll(".skill-card")
    ];

    let found = false;

    allCards.forEach((card) => {
      card.classList.remove("highlight"); // clear old highlights
      if (card.textContent.toLowerCase().includes(searchTerm)) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight");
        found = true;
      }
    });

    if (!found) {
      alert("No matching result found!");
    }

    setQuery(""); // clear input
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Anuradha</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search portfolio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
