import React from 'react'

function Home() {
  return (
    <div>
        <section className="section gradient-banner">
          <div className="shapes-container">
            <div className="shape" data-aos="fade-down-left" data-aos-duration={1500} data-aos-delay={100} />
            <div className="shape" data-aos="fade-down" data-aos-duration={1000} data-aos-delay={100} />
            <div className="shape" data-aos="fade-up-right" data-aos-duration={1000} data-aos-delay={200} />
            <div className="shape" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200} />
            <div className="shape" data-aos="fade-down-left" data-aos-duration={1000} data-aos-delay={100} />
            <div className="shape" data-aos="fade-down-left" data-aos-duration={1000} data-aos-delay={100} />
            <div className="shape" data-aos="zoom-in" data-aos-duration={1000} data-aos-delay={300} />
            <div className="shape" data-aos="fade-down-right" data-aos-duration={500} data-aos-delay={200} />
            <div className="shape" data-aos="fade-down-right" data-aos-duration={500} data-aos-delay={100} />
            <div className="shape" data-aos="zoom-out" data-aos-duration={2000} data-aos-delay={500} />
            <div className="shape" data-aos="fade-up-right" data-aos-duration={500} data-aos-delay={200} />
            <div className="shape" data-aos="fade-down-left" data-aos-duration={500} data-aos-delay={100} />
            <div className="shape" data-aos="fade-up" data-aos-duration={500} data-aos-delay={0} />
            <div className="shape" data-aos="fade-down" data-aos-duration={500} data-aos-delay={0} />
            <div className="shape" data-aos="fade-up-right" data-aos-duration={500} data-aos-delay={100} />
            <div className="shape" data-aos="fade-down-left" data-aos-duration={500} data-aos-delay={0} />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1 text-center text-md-left">
                <h1 className="text-white font-weight-bold mb-4">Showcase your app with Small Apps</h1>
                <p className="text-white mb-5">Besides its beautiful design. Laapp is an incredibly rich core framework for you to
                  showcase your App.</p>
                <a href="FAQ.html" className="btn btn-main-md">Download Now</a>
              </div>
              <div className="col-md-6 text-center order-1 order-md-2">
                <img className="img-fluid" src="images/mobile.png" alt="screenshot" />
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Hero Section  ====*/}
        <section className="section pt-0 position-relative pull-top">
          <div className="container">
            <div className="rounded shadow p-5 bg-white">
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                  <i className="ti-paint-bucket text-primary h1" />
                  <h3 className="mt-4 text-capitalize h5 ">themes made easy</h3>
                  <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                    tempore ipsam dignissimos molestias.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                  <i className="ti-shine text-primary h1" />
                  <h3 className="mt-4 text-capitalize h5 ">powerful design</h3>
                  <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                    tempore ipsam dignissimos molestias.</p>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
                  <i className="ti-thought text-primary h1" />
                  <h3 className="mt-4 text-capitalize h5 ">creative content</h3>
                  <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                    tempore ipsam dignissimos molestias.</p>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================================
=            Feature Grid            =
===================================*/}
        <section className="feature section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto justify-content-center">
                {/* Feature Mockup */}
                <div className="image-content" data-aos="fade-right">
                  <img className="img-fluid" src="images/feature/feature-new-01.jpg" alt="iphone" />
                </div>
              </div>
              <div className="col-lg-6 mr-auto align-self-center">
                <div className="feature-content">
                  {/* Feature Title */}
                  <h2>Increase your productivity with <a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">Small Apps</a></h2>
                  {/* Feature Description */}
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                </div>
                {/* Testimonial Quote */}
                <div className="testimonial">
                  <p>
                    "InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one
                    place."
                  </p>
                  <ul className="list-inline meta">
                    <li className="list-inline-item">
                      <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="" />
                    </li>
                    <li className="list-inline-item">Jonathon Andrew , Themefisher.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto align-self-center">
                <div className="feature-content">
                  {/* Feature Title */}
                  <h2>Increase your productivity with <a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">Small Apps</a></h2>
                  {/* Feature Description */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.</p>
                </div>
                {/* Testimonial Quote */}
                <div className="testimonial">
                  <p>
                    "InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one
                    place."
                  </p>
                  <ul className="list-inline meta">
                    <li className="list-inline-item">
                      <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="" />
                    </li>
                    <li className="list-inline-item">Jonathon Andrew , Themefisher.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mr-auto justify-content-center">
                {/* Feature mockup */}
                <div className="image-content" data-aos="fade-left">
                  <img className="img-fluid" src="images/feature/feature-new-02.jpg" alt="ipad" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Feature Grid  ====*/}
        {/*==============================
=            Services            =
===============================*/}
        <section className="service section bg-gray">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>An Interface For Lifestyle</h2>
                  <p><a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">Small Apps</a> makes
                    it easy to stay on top of your Life Style. No late tasks. No gimmicks.</p>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 align-self-center">
                {/* Feature Image */}
                <div className="service-thumb left" data-aos="fade-right">
                  <img className="img-fluid" src="images/feature/iphone-ipad.jpg" alt="iphone-ipad" />
                </div>
              </div>
              <div className="col-lg-5 mr-auto align-self-center">
                <div className="service-box">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-xs-12">
                      {/* Service 01 */}
                      <div className="service-item">
                        {/* Icon */}
                        <i className="ti-bookmark" />
                        {/* Heading */}
                        <h3>Easy Prototyping</h3>
                        {/* Description */}
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      {/* Service 01 */}
                      <div className="service-item">
                        {/* Icon */}
                        <i className="ti-pulse" />
                        {/* Heading */}
                        <h3>Sensor Bridge</h3>
                        {/* Description */}
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      {/* Service 01 */}
                      <div className="service-item">
                        {/* Icon */}
                        <i className="ti-bar-chart" />
                        {/* Heading */}
                        <h3>Strategist</h3>
                        {/* Description */}
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      {/* Service 01 */}
                      <div className="service-item">
                        {/* Icon */}
                        <i className="ti-panel" />
                        {/* Heading */}
                        <h3>Art Direction</h3>
                        {/* Description */}
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Services  ====*/}
        {/*=================================
=            Video Promo            =
==================================*/}
        <section className="video-promo section bg-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content-block">
                  {/* Heading */}
                  <h2>Watch Our Promo Video</h2>
                  {/* Promotional Speech */}
                  <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Vivamus </p>
                  {/* Popup Video */}
                  <a data-fancybox href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                    <i className="ti-control-play video" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Video Promo  ====*/}
        {/*=================================
=            Testimonial            =
==================================*/}
        <section className="section testimonial" id="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Testimonial Slider */}
                <div className="testimonial-slider owl-carousel owl-theme">
                  {/* Testimonial 01 */}
                  <div className="item">
                    <div className="block shadow">
                      {/* Speech */}
                      <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
                        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim.
                      </p>
                      {/* Person Thumb */}
                      <div className="image">
                        <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="image" />
                      </div>
                      {/* Name and Company */}
                      <cite>Abraham Linkon , Themefisher.com</cite>
                    </div>
                  </div>
                  {/* Testimonial 01 */}
                  <div className="item">
                    <div className="block shadow">
                      {/* Speech */}
                      <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
                        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim.
                      </p>
                      {/* Person Thumb */}
                      <div className="image">
                        <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="image" />
                      </div>
                      {/* Name and Company */}
                      <cite>Abraham Linkon , Themefisher.com</cite>
                    </div>
                  </div>
                  {/* Testimonial 01 */}
                  <div className="item">
                    <div className="block shadow">
                      {/* Speech */}
                      <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
                        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim.
                      </p>
                      {/* Person Thumb */}
                      <div className="image">
                        <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="image" />
                      </div>
                      {/* Name and Company */}
                      <cite>Abraham Linkon , Themefisher.com</cite>
                    </div>
                  </div>
                  {/* Testimonial 01 */}
                  <div className="item">
                    <div className="block shadow">
                      {/* Speech */}
                      <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
                        Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim.
                      </p>
                      {/* Person Thumb */}
                      <div className="image">
                        <img src="images/testimonial/feature-testimonial-thumb.jpg" alt="image" />
                      </div>
                      {/* Name and Company */}
                      <cite>Abraham Linkon , Themefisher.com</cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Testimonial  ====*/}
        <section className="call-to-action-app section bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>It's time to change your mind</h2>
                <p>Download over 2 million humans .Get <a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">Small Apps</a> free forever!
                  <br />We say you won’t look back.</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href className="btn btn-rounded-icon">
                      <i className="ti-apple" />
                      Iphone
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href className="btn btn-rounded-icon">
                      <i className="ti-android" />
                      Android
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href className="btn btn-rounded-icon">
                      <i className="ti-microsoft-alt" />
                      Windows
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home