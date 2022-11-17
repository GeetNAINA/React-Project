import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-light bg-light shadow">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <Link to="/" class="navbar-brand">LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
        </li>
        <li class="nav-item">
        <Link to="/oddEven" class="nav-link">OddEven</Link>
        </li>
        <li class="nav-item">
        <Link to="/fetchdata" class="nav-link">FetchData</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
    </div>
  );
}

export default Navbar