import React from "react";
import "../Contact/Contact.css";
import FadeOnScroll from "../Animated/motion";

function Contact() {
  // const [text , settext] = useState('Send Message')
   
  

  const ContactForm = async (e) => {
    e.preventDefault();
    // settext('wait a second')
    var formData = new FormData(document.getElementById("sub-form"));
     

    try {
      const response = await fetch(document.getElementById("sub-form").getAttribute("action"), {
        method: "POST",
        body: formData, 
      });

      if (response.ok) {
        console.log('Data saved to Google Sheets successfully!');
        // Optionally, you can reset the form here
        // document.getElementById('submitButton').innerHTML='Wait a Moment..';
        alert('submission is successfully completed')
        document.getElementById("sub-form").reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert('There was a problem in sending the data! Sorry');
      document.getElementById('submitButton').innerHTML='Send Message';
    }
  };

  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className=" col-12 col-lg-6 wow fadeIn leftside-design" data-wow-delay="0.1s">
            <FadeOnScroll>
              <h1 className="display-6 fw-normal mb-2 text-light">Contact With Us Now!</h1>
              <p className="text-light text-muted mb-2" style={{ fontWeight: 400 }}>
                Experience our proficiency! Learn why our clients are ecstatic to collaborate with us. Reach out to us to get started
              </p>
              <form id="sub-form" action="https://script.google.com/macros/s/AKfycbzkGVEvNzMyalZx_3QRhhy4Lt2NATuLyYC4GIxcJaH4Sy2fN_KV8pTaZ9n5orCcuBk/exec" method="post" onSubmit={ContactForm}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control inp-field"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                       
                      <label htmlFor="name" className="inp-field">Your Name<span style={{ color: "red" }}>*</span></label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control inp-field"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email" className="inp-field">Your Email<span style={{ color: "red" }}>*</span></label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control inp-field"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject" className="inp-field">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        style={{ height: "100px" }}
                        id="message"
                        name="message"
                        required
                      ></textarea>
                      <label htmlFor="message" className="inp-field">Message<span style={{ color: "red" }}>*</span></label>
                    </div>
                  </div>
                  <div className="col-12">
                    <input
                      className="my-btn  py-2 px-3 me-3"
                      id="submitButton"
                      type="submit"
                      value='Send Message'
                      // onClick={ContactForm}
                    />
                  </div>
                </div>
              </form>
            </FadeOnScroll>
          </div>

          <div class="col-12 col-lg-6 right-side-design">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-11 mt-4">
                {/* <h2 class="h2 mb-3">Reach out with us to explore Technology</h2> */}
                <p class="lead fs-4 text-secondary mb-5">
                  We're eager to connect with new clients! If you're interested
                  in working together, Feel free to ask us !
                </p>
                <div class="d-flex mb-4">
                  <div class="me-4 ">
                    <h3>
                      <i title="Map" className="fa fa-map"></i>
                    </h3>
                  </div>
                  <div>
                    <h4 class="mb-3">Address</h4>
                    <address class="mb-0 text-secondary">
                      Khanderao Bazar,Tarana 456665, <br />
                      Madhya Pradesh , India
                    </address>
                  </div>
                </div>
                <div class="d-flex mb-4">
                  <div class="me-4  ">
                    <h3>
                      <i title="Phone" className="fa fa-phone"></i>
                    </h3>
                  </div>
                  <div>
                    <h4 class="mb-3">Phone</h4>
                    <p class="mb-0">
                      <a
                        class="link-secondary text-decoration-none"
                        href="tel:7313683823"
                      >
                        +91 7313683823
                      </a>
                    </p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="me-4">
                    <h3>
                      <i title="email" className="fa fa-envelope"></i>
                    </h3>
                  </div>
                  <div>
                    <h4 class="mb-3">E-Mail</h4>
                    <p>
                      <a
                        class="link-secondary text-decoration-none"
                        href="mailto:hr@cloudstrytech.com"
                      >
                        hr@cloudstrytech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
      </div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-12 ">
            <iframe
              className="img-fluid d-none d-xl-block"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14653.805620593368!2d76.0430372!3d23.3356551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963670062b66555%3A0xfa5c9876e7c27b41!2sCloudstry%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712743996577!5m2!1sen!2sin"
              
              style={{ border: 0, width: "100%", height: "25rem" }}
              allowfullscreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
