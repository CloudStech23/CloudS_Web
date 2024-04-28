import React from "react";
 
import WhoImg from "../Images/WhoWeimg.png";
import FadeOnScroll from "../Animated/motion";

function About() {
  return (
    <div>
      <header class="py-5" style={{ backgroundColor: "#1e232e" }}>
        <div class="container px-5">
          <div class="row justify-content-center">
            <div
              class="col-lg-8 col-xxl-6 rounded"
              style={{ boxShadow: "rgb(20, 17, 17) 8px 11px 8px 0px" }}
            >
              <div class="text-center">
                <h1 class="fw-bolder mb-4 text-white">About Us</h1>
                <p class=" fw-normal  mb-2" style={{color:'#c2c1c1'}}>
                  <span className="fw-bold ">Cloudstry Technologies</span>,A
                  trusted partner for business growth, provides comprehensive
                  platform solutions, strategic consultancy, and tailored
                  strategies to propel businesses forward. Thrive in today's
                  competitive landscape, achieving goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <FadeOnScroll animation="right">
              <iframe
                    style={{ height: "25rem", width: "37.6rem" }}
                    src="https://www.youtube.com/embed/zXsoiavtMwo"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid my-5 rounded"
                    title="about us"
                  ></iframe>
              </FadeOnScroll>
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <FadeOnScroll animation="left">
                    <h2 class="mb-3">Who Are We?</h2>
                    <p class="lead fs-4 text-secondary mb-3">
                      At Cloudstry, we specialize in scaling businesses,
                      building brands, and fostering growth through innovative
                      solutions and strategies.
                    </p>
                  </FadeOnScroll>
                  <FadeOnScroll animation="left">
                    <p class="mb-5">
                      Dedicated to fostering business growth through
                      cutting-edge technology solutions, Cloudstry Technologies
                      specializes in public user engagement and robust software
                      support, empowering enterprises to thrive in the digital
                      age with unparalleled innovation and expertise
                    </p>
                  </FadeOnScroll>

                  <div class="row gy-4 gy-md-0 gx-xxl-5X">
                    <div class="col-12 col-md-6">
                      <FadeOnScroll animation="left">
                        <div class="d-flex">
                          <div class="me-4 text-dark">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              class="bi bi-people-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                          </div>
                          <div>
                            <h2 class="h4 mb-3">Public Utilities</h2>
                            <p class="text-secondary mb-0">
                              Revolutionizing public utility with advanced
                              technology solutions
                            </p>
                          </div>
                        </div>
                      </FadeOnScroll>
                    </div>
                    <div class="col-12 col-md-6">
                      <FadeOnScroll animation="left">
                        <div class="d-flex">
                          <div class="me-4 text-dark ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              class="bi bi-clipboard2-data-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                              <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
                            </svg>
                          </div>
                          <div>
                            <h2 class="h4 mb-3">Digital Marketing</h2>
                            <p class="text-secondary mb-0">
                              Redefining digital marketing through cutting-edge
                              technology and strategic expertise
                            </p>
                          </div>
                        </div>
                      </FadeOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       

      <section class="py-5 position-relative bg-light">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <FadeOnScroll animation="down">
                <img
                  class="img-fluid rounded mb-5 mb-lg-0"
                  src={WhoImg}
                  alt="..."
                />
              </FadeOnScroll>
            </div>

            <div class="col-lg-6">
              <FadeOnScroll animation="down">
                <h2 class="fw-bolder">Vision & Values</h2>
                <p class="lead fw-normal text-muted mb-0">
                 We are driven by a commitment to excellence, innovation, and customer satisfaction. Our vision is to transform businesses through technology, creating sustainable growth and lasting impact in the digital landscape. Guided by integrity and a passion for success, we strive to exceed expectations and lead our industry with integrity and purpose
                </p>
              </FadeOnScroll>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="wave-svg position-absolute bottom-0 start-0"
        >
          <path
            fill="#343a40"
            fill-opacity="1"
            d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,186.7C672,171,768,181,864,197.3C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

export default About;
