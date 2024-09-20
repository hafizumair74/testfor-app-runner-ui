import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown @@home">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home
                  <span><i className="ti-angle-down" /></span>
                </a>
                {/* Dropdown list */}
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item @@home1" href="index.html">Homepage</a></li>
                  <li><a className="dropdown-item" href="homepage-2.html">Homepage 2</a></li>
                  <li><a className="dropdown-item @@home3" href="homepage-3.html">Homepage 3</a></li>
                  <li className="dropdown dropdown-submenu dropright">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                      <li><a className="dropdown-item" href="index.html">Submenu 11</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 12</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown @@pages">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages
                  <span><i className="ti-angle-down" /></span>
                </a>
                {/* Dropdown list */}
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item @@team" href="team.html">Team</a></li>
                  <li><a className="dropdown-item @@career" href="career.html">Career</a></li>
                  <li><a className="dropdown-item @@blog" href="blog.html">Blog</a></li>
                  <li><a className="dropdown-item @@blogSingle" href="blog-single.html">Blog Single</a></li>
                  <li><a className="dropdown-item @@privacy" href="privacy-policy.html">Privacy</a></li>
                  <li><a className="dropdown-item @@faq" href="FAQ.html">FAQ</a></li>
                  <li><a className="dropdown-item" href="sign-in.html">Sign In</a></li>
                  <li><a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
                  <li><a className="dropdown-item" href="404.html">404</a></li>
                  <li><a className="dropdown-item" href="comming-soon.html">Coming Soon</a></li>
                  <li className="dropdown dropdown-submenu dropleft">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                      <li><a className="dropdown-item" href="index.html">Submenu 21</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 22</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item @@contact">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar