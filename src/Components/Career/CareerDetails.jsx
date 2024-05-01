import React from "react";
import { useParams } from "react-router-dom";
import { jobdetails } from "../Career/CareerData";

function CareerDetails() {
  const { id } = useParams();
  const data = jobdetails.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <article>
              <header className="" style={{marginBottom:'2.2rem'}}>
                <h1 className="display-6 mb-3" style={{fontWeight:'370',color:'#1e232e'}}>{data.title}</h1>
              </header>
              <section className="mb-5">
                <h4 className="fw-bold mb-3">Responsibilities :</h4>
                <p className="fs-5 mb-4">
                  <ul>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R1}</li>{" "}
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R2}</li>
                     
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R3}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R4}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R5}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R6}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R7}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R8}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R9}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.resposibilities[0].R10}</li>
                  </ul>{" "}
                </p>

                <h4 className="fw-bold mb-3">
                  Experience and Skills required for the role :
                </h4>
                <p className="fs-5 mb-4">
                <ul>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E1}</li>{" "}
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E2}</li>
                     
                    <li className="fw-noraml" style={{fontSize:'17px'}} >{data.experience[0].E3}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E4}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E5}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E6}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E7}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E8}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E9}</li>
                    <li className="fw-noraml" style={{fontSize:'17px'}}>{data.experience[0].E10}</li>
                  </ul>{" "}
                </p>
                 
              </section>
            </article>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4" style={{ width: "20rem" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6 mx-2">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#" className="" style={{textDecoration:'none',color:'#1e232e'}}> <i className="fa fa-building" aria-hidden="true"></i> {data.jobarea}</a>
                      </li>
                      <li>
                        <a href="#" style={{textDecoration:'none',color:'#1e232e'}}> <i className="fa fa-briefcase" aria-hidden="true"></i> {data.jobtime}</a>
                      </li>
                      <li>
                        <a href="#" style={{textDecoration:'none',color:'#1e232e'}}> <i className="fa fa-map-marker" aria-hidden="true"></i> {data.location}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <form
              action="#!"
              className="p-4 rounded mb-4"
              style={{ border: " ", boxShadow: "#c2c2c2 0px 1px 7px" }}
            >
              <div className="row">
                <div className="col-12 mb-2">
                  <label htmlFor="fullname" className="form-label">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-12 col-md-6 mb-2">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="JohnDoe@example.com"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-2">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone"
                        viewBox="0 0 16 16"
                         

                      >
                        <path
                          fillRule="evenodd"
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder='XXXXX XXX00'
                    />
                  </div>
                </div>

                <div className="col-12 mb-2">
                  <label class="d-block mb-4">
                    <span class="form-label d-block">Job Type </span>
                    <select required name="job" class="form-select">
                      <option>Software Support Engineer</option>
                      <option>Software Engineer - Java</option>
                      <option default>{data.jobselect}</option>
                      <option>Senior Quality Analyst</option>
                      <option>Software Engineer - Nodejs/Angular</option>
                      <option>Dev Ops Engineer - Google Cloud</option>
                      <option>Data Engineer</option>
                    </select>
                  </label>
                </div>
                <div className="col-12 mb-2">
                  <label class="d-block mb-4">
                    <span class="form-label d-block">Years of experience </span>
                    <select required name="experience" class="form-select">
                      <option>Less than a year</option>
                      <option>1 - 2 years</option>
                      <option>2 - 4 years</option>
                      <option>4 - 7 years</option>
                      <option>7 - 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </label>
                </div>
                <div className="col-12 mb-2">
                  <label htmlFor="message" className="form-label mb-2">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    required
                    placeholder="What motivates you?"
                  ></textarea>
                </div>
                <div className="col-12 mt-2">
                  <label class="d-block mb-4">
                    <span class="form-label d-block">Upload Your Resume </span>
                    <input
                      required
                      name="cv"
                      type="file"
                      class="form-control"
                    />
                  </label>
                </div>
                <div className="col-4 mb-2">
                  <div className="d-grid">
                    <button
                      className="btn Careerbtn-primary btn-lg"
                      type="submit"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Submit Form
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerDetails;
