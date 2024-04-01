import React from "react";
import img2 from "../Images/2.jpg";
import Type from './Type'

function Home() {
   return (
    <div>
      <header className="py-5 vh-100" style={{ background:'linear-gradient(135deg, #1e232e 0%, #39424e 50%, #ffffff 100%)'}}>
  <div className="container px-5">
    <div className="row gx-5 align-items-center justify-content-center">
      <div className="col-lg-8 col-xl-7 col-xxl-6">
        <div className="my-5 text-center text-xl-start">
          <h1 className="display-5 fw-bolder text-white mb-2 ">
             Welcom To CloudStry,<br />
             <Type/>
          </h1>
          <p className="lead fw-normal text-white-50 mb-4">
            Quickly design and customize responsive mobile-first sites
            with Bootstrap, the world’s most popular front-end open-source
            toolkit!
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
      </div>
      {/* Existing Image */}
      <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center" >
        <img
          className="img-fluid rounded-3 my-5"
          src="https://dummyimage.com/600x400/343a40/6c757d"
          alt="..."
        />
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
              style={{minHeight: '400px'}}
            >
              <img
                className="position-absolute w-100 h-100 pt-5 pe-5"
                src={img2}
                alt=""
                style={{objectFit:'cover'}}
              />
              <img
                className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                src={img2}
                alt=""
               style={{width:'200px',height:'200px'}}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <div
                className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 my-auto"
              >
                Who are we
              </div>
              <h1 className="display-6 mb-10 mt-4">
                <h1 className="fw-bold text-dark m-0">
                  Rapid<span className="text-dark">HealthConnect</span><span></span>
                </h1>
              </h1>
             
              <p className="mb-5">
                At Rapid Health Connect, we are dedicated to revolutionizing
                medical care delivery. Our commitment to excellence ensures
                seamless access to comprehensive healthcare solutions, including
                specialized services like pulmonary care, sleep medicine, and
                critical care. With a focus on innovation and patient-centered
                care, Rapid Health Connect prioritizes efficiency,
                accessibility, and quality in every aspect of our medical
                services.
              </p>
 
              <a className="btn btn-outline-primary py-2 px-3" href="/contact.html">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      

 


<section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">Services</h2>
                                <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..." />
                                <div className="card-body p-4">
                                     <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Blog post title</h5></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias ea saepe? Nostrum, hic consequuntur perspiciatis iure accusamus totam ipsam neque reprehenderit quasi tempora ullam repudiandae explicabo deserunt ex maiores.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..." />
                                <div className="card-body p-4">
                                     <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Another blog post title</h5></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reiciendis repudiandae quaerat ullam molestiae et placeat eius officiis soluta distinctio repellendus a aperiam enim culpa exercitationem magnam, nesciunt ratione ea!</p>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..." />
                                <div className="card-body p-4">
                                     <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">The last blog post title is a little bit longer than the others</h5></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam similique adipisci officia magni dicta ad dolorem, quidem natus accusamus maiores! Sint, dolorem exercitationem molestias delectus tempora animi rerum voluptatem quia?</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </section>

      
            <section className="py-5" id="features" style={{boxShadow:'inset #eaeaea 0px 15px 20px 0px'}}>
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-pc-display-horizontal"></i></div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"></div>
                                    <h2 className="h5">Featured title</h2>
                                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







      <section className="py-5 bg-light" id="scroll-target"  >
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
            <div
              className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3"
            >
              Connect With Us
            </div>
            <h1 className="display-6 text-dark mb-3">
              We extend our gratitude for your connection with us
            </h1>
            <p className="text-dark-50 mb-0">
              We acknowledge receipt of your message and look forward to further
              communication with you
            </p>
            <button className="btn btn-outline-primary mt-4 btn-lg px-4">contact us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
