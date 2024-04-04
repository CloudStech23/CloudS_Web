import React from "react";
import WhoImg from "../Images/WhoWeimg.png";
import Type from "../Animated/Type";
import FadeOnScroll from "../Animated/motion";
import contactImg from "../Images/contactus.png";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import homevideo from "../video/homepagevid.mp4";

function Home() {
  return (
    <div>
      {/* Header */}
      <header className="position-relative py-5 vh-100">
        {/* Video background */}
        <video autoPlay muted loop id="video-bg" className="position-absolute top-0 start-0">
          <source src={homevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="black-blur-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container px-5 position-relative">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-6">
              <FadeOnScroll>

              <div className="text-center my-5 ">
                <h1 className="display-3 text-white mt-4" style={{ cursor: 'pointer' }}>
                  Welcome <span className="text-decoration-underline">Cloudstry</span>
                </h1>
                <h1 className="display-4 text-white mt-4" style={{ fontWeight: 500, cursor: 'pointer' }}>
                  <Type />
                </h1>
                <p className="lead text-white-50 mb-4" style={{ cursor: 'pointer' }}>
                  Elevate your technology experience with Cloudstry Technologies, where expertise meets unparalleled commitment !!
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
                  <Link className="btn btn-primary btn-lg px-4 me-sm-3" to='/Support'>
                    Get Started
                  </Link>
                </div>
              </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <div className="container-xxl mt-4 bg-light rounded py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* Image */}
              <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <FadeOnScroll animation="right">
                  <img className="img-fluid rounded-3 my-5" src={WhoImg} alt="..." />
                </FadeOnScroll>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              {/* Text */}
              <FadeOnScroll animation="left">
                <div className="h-100">
                  <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 my-auto">
                    Who are we?
                  </div>
                  <h1 className="display-6 mb-10 mt-4">
                    <h1 className="fw-bold text-dark m-0">
                      Cloudstry Technologies
                      <span></span>
                    </h1>
                  </h1>
                  <p className="mb-2  lead" style={{ fontWeight: "400" }}>
                    Welcome to Cloudstry Technologies, a pioneering IT
                    consultancy firm dedicated to propelling businesses towards
                    digital excellence. We pride ourselves on being more than
                    just an IT company; we are your strategic ally, committed to
                    understanding your unique needs and crafting tailored
                    solutions that drive tangible results.
                    <p className="mb-4 lead">
                      With a focus on innovation and expertise, we offer a
                      comprehensive suite of services designed to meet the
                      diverse demands of modern enterprises. From IT strategy
                      consultancy and product management to QA and software
                      services, our seasoned professionals bring a wealth of
                      industry knowledge to the table, empowering you to make
                      informed decisions that accelerate your business growth.
                    </p>
                  </p>
                  <Link className="about-btn py-2 px-3 rounded" to="/About-Us">
                    Learn More
                  </Link>
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-5" id="services">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <FadeOnScroll>
                <div className="text-center">
                  <div className="d-inline-block rounded-pill bg-secondary text-white py-1 mb-4 px-3 my-auto">
                    SOLUTIONS
                  </div>
                  <p className="lead fw-normal text-muted mb-5">
                    Robust IT infrastructure and proactive support are
                    fundamental to ensuring business continuity and optimizing
                    organizational efficiency
                  </p>
                </div>
              </FadeOnScroll>
            </div>
          </div>
          <FadeOnScroll animation="up">
            <div className="row gx-5">
            <div className="col-lg-4 mb-5  ">
              <Link to='/ITStrategyConsultancy' className="text-decoration-none">
                <div className="card h-100 shadow border-0 serve-card ">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none  "
                      href="#!"
                    >
                      <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">It Strategy Consultancy</h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                    At our consultancy firm, we specialize in providing IT strategy consulting services to organizations of all sizes. Our team of experienced consultants collaborates closely with your organization to develop a comprehensive IT strategy aligned with your business goals and objectives. Through our tailored approach, we ensure that your technology initiatives drive measurable results and sustainable growth.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                   </div>
                </div>
              </Link>
              </div>
              <div className="col-lg-4 mb-5  ">
                <Link to='/ProductManagementQA' className="text-decoration-none">
                <div className="card h-100 shadow border-0 serve-card">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none  "
                      href="#!"
                    >
                       <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">Product Mangement & QA</h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                    Unlock seamless collaboration and elevate product excellence with our cutting-edge QA and Product Management Solutions. Our comprehensive services encompass rigorous testing protocols and strategic product roadmapping, empowering your team to deliver exceptional products on time, within budget, and with unmatched quality assurance.
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 mb-5  ">
                <Link to='/SoftwareService' className="text-decoration-none">
                <div className="card h-100 shadow border-0 serve-card">
                  <img
                    className="card-img-top "
                    src="https://dummyimage.com/600x350/6c757d/343a40"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none  "
                      href="#!"
                    >
                       <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">Software Service</h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                    Our software services encompass a comprehensive suite of solutions tailored to meet the diverse needs of businesses in today's dynamic digital landscape. From custom software development to system integration and maintenance, we provide end-to-end services aimed at ensuring efficient operations and empowering businesses to thrive in an ever-evolving technological environment.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between"></div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" id="features" style={{ boxShadow: "inset #eaeaea 0px 15px 20px 0px" }}>
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                A Better Way To Grow Bussiness With..
              </h2>
            </div>
            <div className="col-lg-8">
              <FadeOnScroll animation="up">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-pc-display-horizontal"></i>
                    </div>
                    <h2 className="h3 fw-normal">Enhancing Operational Efficiency</h2>
                    <p className="mb-0">
                    Implementing streamlined processes and innovative technologies to optimize operations, reduce costs, and increase productivity
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-building"></i>
                    </div>
                    <h2 className="h3 fw-normal">Customer-Centric Solutions</h2>
                    <p className="mb-0">
                    Developing tailored IT solutions and services focused on meeting the evolving needs of customers, enhancing satisfaction, and fostering long-term relationships
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-toggles2"></i>
                    </div>
                    <h2 className="h3 fw-normal">Market Diversification</h2>
                    <p className="mb-0">
                    Expanding into new markets and industries by diversifying product and service offerings, leveraging existing expertise and capabilities to address emerging market needs
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                    <h2 className="h3 fw-normal">Continuous Innovation</h2>
                    <p className="mb-0">
                    Cultivating a culture of creativity and continuous improvement to stay at the forefront of technological advancements
                    </p>
                  </div>
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <FadeOnScroll animation="right">
                <img className="img-fluid rounded mb-5 mb-lg-0" src={contactImg} alt="..." />
              </FadeOnScroll>
            </div>
            <div className="col-lg-6">
              <FadeOnScroll animation="left">
                <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
                  Connect With Us
                </div>
              </FadeOnScroll>
              <FadeOnScroll animation="left">
                <h1 className="display-6 text-dark mb-3">
                  We're grateful for your connection and extend our sincere
                  thanks
                </h1>
              </FadeOnScroll>
              <FadeOnScroll animation="left">
                <p className="text-dark-50 mb-4">
                  We have received your message and anticipate further
                  communication with you
                </p>
                <Link
                  to="/Support"
                  className="cont-btn mt-4 btn-lg px-4 text-decoration-none"
                >
                  contact us
                </Link>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
