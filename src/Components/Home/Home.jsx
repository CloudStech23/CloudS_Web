import React from "react";
import img2 from "../Images/2.jpg";
import Type from "./Type";
import FadeOnScroll from "./motion";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../Images/1.jpg'
import img3 from '../Images/3.jpg'


function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div>
      <header
        className="py-5 vh-100"
        style={{
          background:
            "linear-gradient(135deg, #1e232e 0%, #39424e 50%, #ffffff 100%)",
        }}
      >
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <FadeOnScroll>
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2 ">
                    Welcom To CloudStry,
                    <br />
                    <Type />
                  </h1>
                  <p className="lead fw-normal text-white-50 mb-4">
                    Quickly design and customize responsive mobile-first sites
                    with Bootstrap, the world’s most popular front-end
                    open-source toolkit!
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      className="btn  btn-outline-primary btn-lg px-4 me-sm-3"
                      href="#features"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </FadeOnScroll>
            </div>
            {/* Existing Image */}

            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
      {/* <Slider {...settings}> */}
        <div>
          <img
            className="img-fluid rounded-3 my-5"
            src={img3}
            alt="..."
          />
         </div>
        {/* <div>
          <img
            className="img-fluid rounded-3 my-5"
            src={img2}
            alt="..."
          />
        </div>
        <div>
          <img
            className="img-fluid rounded-3 my-5"
            src={img1}
            alt="..."
          />
        </div>
      </Slider> */}
    </div>

          </div>
        </div>
      </header>

      <div className="container-xxl mt-4 bg-light rounded py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 "
                  src={img2}
                  alt=""
                  style={{ objectFit: "cover" }}
                />

                 
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
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

                  <p className="mb-5 lead">
                  Robust IT infrastructure and proactive support are fundamental to ensuring business continuity and optimizing organizational efficiency. Unreliable technology and reactive IT responses can significantly hinder operational workflows.
                  </p>

                  <a
                    className="btn btn-outline-primary py-2 px-3"
                    href="/contact.html"
                  >
                    Learn More
                  </a>
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <FadeOnScroll>
                <div className="text-center">
                  <h2 className="fw-bolder">Services</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque fugit ratione dicta mollitia. Officiis ad.
                  </p>
                </div>
              </FadeOnScroll>
            </div>
          </div>
          <FadeOnScroll animation="up">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3  text-center">Service 1</h5>
                    </a>
                    <p className="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Assumenda alias ea
                      saepe? Nostrum, hic consequuntur perspiciatis iure
                      accusamus totam ipsam neque reprehenderit quasi tempora
                      ullam repudiandae explicabo deserunt ex maiores.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3  text-center">
                        Service 2
                       </h5>
                    </a>
                    <p className="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi reiciendis repudiandae quaerat ullam molestiae et
                      placeat eius officiis soluta distinctio repellendus a
                      aperiam enim culpa exercitationem magnam, nesciunt ratione
                      ea!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/6c757d/343a40"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3 text-center">
                        Service 3
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      Some more quick example text to build on the card title
                      and make up the bulk of the card's content. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nam
                      similique adipisci officia magni dicta ad dolorem, quidem
                      natus accusamus maiores! Sint, dolorem exercitationem
                      molestias delectus tempora animi rerum voluptatem quia?
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </section>

      <section
        className="py-5"
        id="features"
        style={{ boxShadow: "inset #eaeaea 0px 15px 20px 0px" }}
      >
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
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-building"></i>
                    </div>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-toggles2"></i>
                    </div>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <FadeOnScroll animation="right">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="https://dummyimage.com/600x400/343a40/6c757d"
                  alt="..."
                />
              </FadeOnScroll>
            </div>
            <div className="col-lg-6">
            <FadeOnScroll animation='left'>
              <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
                Connect With Us
              </div>
            </FadeOnScroll>
            <FadeOnScroll animation='left'>

              <h1 className="display-6 text-dark mb-3">
                We extend our gratitude for your connection with us
              </h1>
            </FadeOnScroll>
              <FadeOnScroll animation='left'>

              <p className="text-dark-50 mb-0">
                We acknowledge receipt of your message and look forward to
                further communication with you
              </p>
              <button className="btn btn-outline-primary mt-4 btn-lg px-4">
                contact us
              </button>
              </FadeOnScroll>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
