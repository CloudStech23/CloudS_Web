import React from "react";
// import WhoImg from "../Images/bgGIf.gif";
import WhoImg1 from "../Images/WhoIMg1.png";
import Type from "../Animated/Type";
import FadeOnScroll from "../Animated/motion";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import homevideo from "../video/homepagevid.mp4";

function Home() {
  return (
    <div>
      {/* Header */}
      <header className="position-relative py-5 vh-100">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          id="video-bg"
          className="position-absolute top-0 start-0"
        >
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
                  <h1
                    className="display-4 text-white mt-4"
                    style={{ cursor: "pointer" }}
                  >
                    Welcome{" "}
                    <span className="">
                      Cloudstry{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        
                        fill="currentColor"
                        class="bi bi-cloudy"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973M8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 5.5" />
                      </svg>
                    </span>
                  </h1>
                  <h1
                    className="display-4 text-white mt-4"
                    style={{ fontWeight: 400, cursor: "pointer" }}
                  >
                    <Type />
                  </h1>
                  <p
                    className="lead text-white-50 mb-4"
                    style={{ cursor: "pointer" }}
                  >
                    Elevate your technology experience with Cloudstry
                    Technologies, where expertise meets unparalleled commitment
                    !!
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
                    <Link
                      className="btn btn-primary btn-lg px-4 me-sm-3"
                      to="/Support"
                    >
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
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <FadeOnScroll animation="right">
                  <img
                    className="img-fluid rounded-3 my-5"
                    src={WhoImg1}
                    alt="..."
                  />
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
                  <p className="mb-2  lead">
                    Welcome to Cloudstry Technologies, a pioneering IT
                    consultancy firm dedicated to propelling businesses towards
                    digital excellence. We pride ourselves on being more than
                    just an IT company; we are your strategic ally, committed to
                    understanding your unique needs and crafting tailored
                    solutions that drive tangible results. <br />
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
                  <Link className="about-btn  py-2 px-3 rounded" to="/About-Us">
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
                <div className="card h-100 shadow border-0 serve-card ">
                  <iframe
                    style={{ height: "13.8rem", width: "23.5rem" }}
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid"
                    title="Itstrategy&consultancy"
                  ></iframe>
                  <Link
                    to="/It-Strategy-Consultancy"
                    className="text-decoration-none"
                  >
                    <div className="card-body p-4">
                      <a className="text-decoration-none  " href="#!">
                        <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                          It Strategy Consultancy
                        </h5>
                      </a>
                      <p className="card-text mb-0 text-dark">
                        At our consultancy firm, We specialize in providing IT
                        strategy consulting services to organizations of all
                        sizes. Our team of experienced consultants collaborates
                        closely with your organization to develop a
                        comprehensive IT strategy aligned with your business
                        goals and objectives. Through our tailored approach, we
                        ensure that your technology initiatives drive measurable
                        results and sustainable growth.
                      </p>
                    </div>
                  </Link>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                </div>
              </div>
              <div className="col-lg-4 mb-5  ">
                <div className="card h-100 shadow border-0 serve-card">
                  <iframe
                    style={{ height: "13.8rem", width: "23.5rem" }}
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid"
                    title="Productmanagemtn&QA"
                  ></iframe>
                  <Link
                    to="/ProductManagement-QA"
                    className="text-decoration-none"
                  >
                    <div className="card-body p-4">
                      <a className="text-decoration-none  " href="#!">
                        <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                          Product Mangement & QA
                        </h5>
                      </a>
                      <p className="card-text mb-0 text-dark">
                        Unlock seamless collaboration and elevate product
                        excellence with our cutting-edge QA and Product
                        Management Solutions. Our comprehensive services
                        encompass rigorous testing protocols and strategic
                        product roadmapping, empowering your team to deliver
                        exceptional products on time, within budget, and with
                        unmatched quality assurance.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-5  ">
                <div className="card h-100 shadow border-0 serve-card">
                  <iframe
                    style={{ height: "13.8rem", width: "23.5rem" }}
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid"
                    title="SoftwareService"
                  ></iframe>
                  <Link to="/Software-Service" className="text-decoration-none">
                    <div className="card-body p-4">
                      <a className="text-decoration-none  " href="#!">
                        <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                          Software Service
                        </h5>
                      </a>
                      <p className="card-text mb-0 text-dark">
                        Our software services encompass a comprehensive suite of
                        solutions tailored to meet the diverse needs of
                        businesses in today's dynamic digital landscape. From
                        custom software development to system integration and
                        maintenance, we provide end-to-end services aimed at
                        ensuring efficient operations and empowering businesses
                        to thrive in an ever-evolving technological environment.
                      </p>
                    </div>
                  </Link>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                </div>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-5"
        id="features"
        style={{ boxShadow: "inset #eaeaea 0px 15px 20px 0px" }}
      >
        {/* <div className="container px-5 my-5">
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
                    <h2 className="h3 fw-normal">
                      Enhancing Operational Efficiency
                    </h2>
                    <p className="mb-0">
                      Implementing streamlined processes and innovative
                      technologies to optimize operations, reduce costs, and
                      increase productivity
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-building"></i>
                    </div>
                    <h2 className="h3 fw-normal">Customer-Centric Solutions</h2>
                    <p className="mb-0">
                      Developing tailored IT solutions and services focused on
                      meeting the evolving needs of customers, enhancing
                      satisfaction, and fostering long-term relationships
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-toggles2"></i>
                    </div>
                    <h2 className="h3 fw-normal">Market Diversification</h2>
                    <p className="mb-0">
                      Expanding into new markets and industries by diversifying
                      product and service offerings, leveraging existing
                      expertise and capabilities to address emerging market
                      needs
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                    <h2 className="h3 fw-normal">Continuous Innovation</h2>
                    <p className="mb-0">
                      Cultivating a culture of creativity and continuous
                      improvement to stay at the forefront of technological
                      advancements
                    </p>
                  </div>
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div> */}

        <section className="py-5 text-center">
          <div className="container py-2 mb-4">
            <header>
              <FadeOnScroll animation="up">
                <h1 className="display-5">
                  Cultivating Business Excellence Through...
                </h1>
              </FadeOnScroll>
            </header>
          </div>

          <section className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-8 mx-auto">
                  <div className="p-5 bg-white shadow  rounded">
                    <Carousel
                      interval={2000}
                      controls={false}
                      indicators={false}
                    >
                      <Carousel.Item>
                        <div className="media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: "4.5rem", width: "9rem" }}
                            fill="currentColor"
                            class="bi bi-unity"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z" />
                          </svg>
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4"
                              style={{ fontSize: "2.5rem", fontWeight: 500 }}
                            >
                              Enhancing Operational Efficiency
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                  Implementing streamlined processes and
                                  innovative technologies to optimize
                                  operations, reduce costs, and increase
                                  productivity
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: "4.5rem", width: "9rem" }}
                            fill="currentColor"
                            class="bi bi-tools"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                          </svg>
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4"
                              style={{ fontSize: "2.5rem", fontWeight: 500 }}
                            >
                              Customer-Centric Solutions
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                  Developing tailored IT solutions and services
                                  focused on meeting the evolving needs of
                                  customers, enhancing satisfaction, and
                                  fostering long-term relationships
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: "4.5rem", width: "9rem" }}
                            fill="currentColor"
                            class="bi bi-graph-up-arrow"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                            />
                          </svg>
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4"
                              style={{ fontSize: "2.5rem", fontWeight: 500 }}
                            >
                              Market Diversification
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                  Expanding into new markets and industries by
                                  diversifying product and service offerings,
                                  leveraging existing expertise and capabilities
                                  to address emerging market needs
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div class="media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: "4.5rem", width: "9rem" }}
                            fill="currentColor"
                            class="bi bi-rocket-takeoff"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                            <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                            <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                          </svg>
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4"
                              style={{ fontSize: "2.5rem", fontWeight: 500 }}
                            >
                              Continuous Innovation
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                  Cultivating a culture of creativity and
                                  continuous improvement to stay at the
                                  forefront of technological advancements
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>

                      {/* <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4">Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4">Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4" style={{fontSize:'2rem'}}>Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item> */}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <FadeOnScroll animation="right">
                {/* <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={contactImg}
                  alt="..."
                /> */}
                <iframe
                  className="img-fluid rounded"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14653.805620593368!2d76.0430372!3d23.3356551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963670062b66555%3A0xfa5c9876e7c27b41!2sCloudstry%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712743996577!5m2!1sen!2sin"
                  style={{ border: 0, height: "25rem", width: "40rem" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
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
                  contact Us
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
