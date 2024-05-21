import React from "react";
import "../Career/Career.css";
// import { jobdetails } from "../Career/CareerData";
// import { useParams } from "react-router-dom";

function Demo() {
//   const { id } = useParams();
//   const data = jobdetails.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div class="container">
        <div class="row p-3">
          <div class="col-12 col-md-7  car-col-left">
            <div className="">
              <article>
                <header className="job-title pad-4">
                  <h1
                    className="display-6   "
                    style={{ fontWeight: "370", color: "#1e232e" }}
                  >
                    Software Engineer - Nodejs / Angular
                  </h1>
                  <div className="d-flex"><p className="m-2">hello </p>
                  <p className="m-2">hello </p>
                  <p className="m-2">hello </p></div>
                   
                </header>
                <section className=" p-4">
                  <p className="head-text mb-3">Description:</p>
                  <p className="fs-5 mb-4">
                    <div>
                       
                            <p
                          
                              className="fw-noraml"
                              style={{ fontSize: "17px" }}
                            >
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit quod repellat delectus labore in reprehenderit vitae suscipit nemo nesciunt, saepe error, consequuntur perferendis provident illo fugiat. Molestias, suscipit minus.
                            </p>
                           
                    </div>
                  </p>
                  <p className="head-text mb-3">Responsibilities:</p>
                  <p className="fs-5 mb-4">
                    <div>
                       
                            <p
                          
                              className="fw-noraml"
                              style={{ fontSize: "17px" }}
                            >
                            i am respo
                            </p>
                           
                    </div>
                  </p>

                  <p className=" head-text mb-3">
                    Experience and Skills required for the role:
                  </p>
                  <p className="fs-5 mb-4">
                    <div>
                       
                          <p
                           
                            className="fw-noraml"
                            style={{ fontSize: "17px" }}
                          >
                            i am expi
                          </p>
                         
                    </div>
                  </p>
                </section>
              </article>
            </div>
          </div>

          <div class="col-12 col-md-4 p-2 car-col-right">
            <p className="head-text pad-4">Apply for this role:</p>
             
          <form action="" className="p-4 rounded mb-4 form">
            <div className="">
              <div className="col-12 mb-2">
                <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="fullname" name="fullname" required placeholder="John Doe" />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="email" name="email" required placeholder="JohnDoe@example.com" />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="XXXXX XXX00" />
              </div>
              <div className="col-12 mb-2">
                <label className="form-label d-block">Job Type</label>
                <select required name="job" className="form-select">
                  <option value='default' selected>Software Support Engineer</option>
                  <option>Software Engineer - Java</option>
                  <option>Senior Quality Analyst</option>
                  <option>Software Engineer - Nodejs/Angular</option>
                  <option>Dev Ops Engineer - Google Cloud</option>
                  <option>Data Engineer</option>
                </select>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label d-block">Years of experience</label>
                <select required name="experience" className="form-select">
                  <option>Less than a year</option>
                  <option>1 - 2 years</option>
                  <option>2 - 4 years</option>
                  <option>4 - 7 years</option>
                  <option>7 - 10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="message" className="form-label mb-2">Message <span className="text-danger">*</span></label>
                <textarea className="form-control" id="message" name="message" rows="3" required placeholder="What motivates you?"></textarea>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label d-block">Upload Your Resume</label>
                <input required name="cv" type="file" className="form-control" />
              </div>
              <div className="col-12 mb-2">
                <div className="d-grid">
                  <button className="btn Careerbtn-primary btn-lg" type="submit" style={{ whiteSpace: "nowrap" }}>Submit Form</button>
                </div>
              </div>
            </div>
          </form>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
