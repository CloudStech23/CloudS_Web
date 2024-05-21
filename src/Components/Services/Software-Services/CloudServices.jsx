import React from "react";
import img1 from "../../Images/Cloudservices.png";
import FadeOnScroll from "../../Animated/motion";
import { Carousel } from "react-bootstrap";

function CloudServices() {
  return (
    <div>
      <header class=" py-5 position-relative">
       
        <div class="  position-absolute top-0 start-0 w-100 h-100"></div>
        <div class="container px-5 position-relative">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <FadeOnScroll animation='right'>

                <h1 class="display-5   text-dark mb-2">Cloud Services</h1>
                <p class="lead fw-normal text-dark-50 mb-4">
                  Discover the transformative capabilities of cloud services,
                  revolutionizing businesses worldwide. Harnessing the power of
                  remote servers and cutting-edge technology, cloud services
                  offer unparalleled scalability, flexibility, and
                  cost-effectiveness. From data storage and computing power to
                  software development and deployment, cloud services empower
                  organizations to streamline operations, drive innovation, and
                  stay ahead in today's dynamic market landscape. Experience
                  seamless access to resources, enhanced collaboration, and
                  unmatched reliability with our comprehensive cloud solutions
                  tailored to your unique business needs.
                </p>
                </FadeOnScroll>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <FadeOnScroll animation='left'>

              <img class="img-fluid rounded-3 my-5" src={img1} alt="..." />
                </FadeOnScroll>
            </div>
          </div>
        </div>
      </header>

      <section class="py-5 bg-light text-center">
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
                        <div className="media feature-card">
                           
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4 feature-title"
                              style={{  fontWeight: 500 }}
                            >
                              Why Cloud Services ?
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                Cloud services offer scalability, flexibility, and cost-efficiency by eliminating the need for physical infrastructure. They facilitate seamless collaboration, enhance security, and provide robust disaster recovery capabilities. Leveraging cloud services accelerates innovation, improves time-to-market, and ensures business agility in a dynamic digital environment.
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="media feature-card" >
                           
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4 feature-title"
                              style={{ fontWeight: 500 }}
                            >
                              Cloud Collboration Market/Industries
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font-italic lead">
                                Collaborating cloud services with industry needs involves tailoring cloud solutions to address specific challenges and opportunities within different sectors. By understanding industry requirements, cloud providers can offer specialized services and tools designed to enhance efficiency, security, and compliance.
                                </p>
                              </div>
                            </div>
                          </FadeOnScroll>
                        </div>
                      </Carousel.Item>

                      <Carousel.Item>
                        <div className="media feature-card">
                           
                          <FadeOnScroll animation="up">
                            <div
                              className=" mb-4 feature-title"
                              style={{ fontWeight: 400 }}
                            >
                              Aligning Cloud Services with Cloudstry
                            </div>
                            <div className="media-body ml-3">
                              <div className="blockquote border-0 p-0">
                                <p className="font lead">
                                <strong >" Unveiling the Power of Our Cloud Services: Your Path to Success "</strong><br />
                                Explore our tailored cloud solutions, designed to enhance your business with personalized strategies. Benefit from optimized operations, enhanced collaboration, and accelerated growth, tailored to your unique needs, to triumph in today's dynamic marketplace.







                                

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

      <section class="py-5" id="features">
        <div class="container px-5 my-5">
          <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2 class=" mb-0">
                A better way to start with
                <br />
                Cloudstry Technologies
              </h2>
            </div>
            <div class="col-lg-8">
            <FadeOnScroll> 
              <div class="row gx-5 row-cols-1 row-cols-md-2">
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Innovation Enablement</h2>
                  <p class="mb-0">
                    Cloud services empower industries to innovate rapidly by
                    providing access to cutting-edge technologies and
                    development tools
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Global Expansion</h2>
                  <p class="mb-0">
                    Cloud services facilitate global expansion by offering
                    scalable infrastructure and services that can be easily
                    deployed in multiple geographic regions
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Competitive Advantage</h2>
                  <p class="mb-0">
                    Cloud services confer a competitive advantage by enabling
                    businesses to operate more efficiently, respond faster to
                    market changes, and deliver superior customer experiences
                  </p>
                </div>
                <div class="col h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Risk Mitigation</h2>
                  <p class="mb-0">
                    Cloud services help mitigate risks associated with
                    traditional IT infrastructure, such as hardware failures,
                    security breaches, and data loss
                  </p>
                </div>
              </div>
            </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudServices;
