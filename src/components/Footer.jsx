import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 m-md-auto align-self-center">
                <div className="block">
                  <a href="index.html"><img src="images/logo-alt.png" alt="footer-logo" /></a>
                  {/* Social Site Icons */}
                  <ul className="social-icon list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/themefisher"><i className="ti-facebook" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/themefisher"><i className="ti-twitter" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/themefisher/"><i className="ti-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  {/* heading */}
                  <h6>Product</h6>
                  {/* links */}
                  <ul>
                    <li><a href="team.html">Teams</a></li>
                    <li><a href="blog.html">Blogs</a></li>
                    <li><a href="FAQ.html">FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  {/* heading */}
                  <h6>Resources</h6>
                  {/* links */}
                  <ul>
                    <li><a href="sign-up.html">Singup</a></li>
                    <li><a href="sign-in.html">Login</a></li>
                    <li><a href="blog.html">Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  {/* heading */}
                  <h6>Company</h6>
                  {/* links */}
                  <ul>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="team.html">Investor</a></li>
                    <li><a href="privacy.html">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div className="block-2">
                  {/* heading */}
                  <h6>Company</h6>
                  {/* links */}
                  <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-dark py-4">
          <small className="text-secondary">Copyright © . Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></small>
        </div>
      </footer>
    </div>
  )
}

export default Footer