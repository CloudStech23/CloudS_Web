import React from 'react'
import '../Contact/Contact.css'
import mapbg from '../Images/mapbg.png'

function Contact() {
  const bgstyle = {
    backgroundImage: `url(${mapbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }
  return (
    <div>
         <div className="container-xxl py-5" >
      <div className="container">
        <div class="row contact-info wow fadeInUp">

          <div class="col-md-4">
            <div class="contact-address rounded">
               <h3><i className='fa fa-map'></i></h3>
              <address>Khanderao Bazar,Tarana 456665, <br/>
                Madhya Pradesh , India
              </address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
               <h3><i className='fa fa-phone'></i></h3>
              <p><a href="tel:+91-7313683823">+91 7313683823</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
               <h3><i className='fa fa-envelope'></i></h3>
              <p><a href="mailto:hr@cloudstrytech.com">hr@cloudstrytech.com</a></p>
            </div>
          </div>

        </div>
        <div className="row g-5 ">
           
          <div className="col-lg-6 wow fadeIn leftside-design" data-wow-delay="0.1s" >
             <h1 className="display-6 fw-normal mb-4 text-light">If You Have Any Query, Please Contact Us</h1>
             <form >
              <div className="row g-3">
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control inp-field" id="name" name="name" placeholder="Your Name" required/>
                    <label htmlFor="name" className='inp-field'>Your Name<span style={{ color: 'red' }}>*</span></label>
                    <div id="errorName" style={{ fontSize: '.8rem', textAlign: 'left' }} className="mx-2 text-danger"></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control inp-field" id="email" name="email" placeholder="Your Email"  required/>
                    <label htmlFor="email" className='inp-field'>Your Email<span style={{ color: 'red' }}>*</span></label>
                    <div id="errorEmail" style={{ fontSize: '.8rem', textAlign: 'left' }} className="mx-2 text-danger"></div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="form-floating">
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Your Contact Number" />
                    <label htmlFor="phone">Phone<span style={{ color: 'red' }}>*</span></label>
                    <div id="errorPhone" style={{ fontSize: '.8rem', textAlign: 'left' }} className="mx-2 text-danger"></div>
                  </div>
                </div> */}
                {/* <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" id="title3" name="title3" aria-label="Select Title">
                      <option selected value="default">Select Type<span style={{ color: 'red' }}>*</span></option>
                      <option id='type1' value="General">General</option>
                      <option id='type2' value="For Hiring">For Hiring</option>
                    </select>
                    <label htmlFor="title">Select Reference<span style={{ color: 'red' }}>*</span></label>
                    <div id="Problemerrortype" style={{ fontSize: '.8rem', textAlign: 'left' }} className="mx-2 text-danger"></div>
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control inp-field" id="subject" name="subject" placeholder="Subject"  />
                    <label htmlFor="subject" className='inp-field'>Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control  " placeholder="Leave a message here" style={{ height: '100px' }} id="message" name="message" required></textarea>
                    <label htmlFor="message  " className='inp-field'>Message<span style={{ color: 'red' }}>*</span></label>
                    <div id="errorMessage" style={{ fontSize: '.8rem', textAlign: 'left' }} className="mx-2 text-danger"></div>
                  </div>
                </div>
                <div className="col-12">
                  <input className="btn  py-2 px-3 me-3" id="submitButton" type="submit" value='Send Message'   />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '450px' }}>
            <div className="position-relative  overflow-hidden h-100">
            <iframe className="position-relative w-100 h-100 map-style" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3663.4514079067208!2d76.043037!3d23.335655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963670062b66555%3A0xfa5c9876e7c27b41!2sCloudstry%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711875625859!5m2!1sen!2sin"  frameBorder="0" style={{ minHeight: '450px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
