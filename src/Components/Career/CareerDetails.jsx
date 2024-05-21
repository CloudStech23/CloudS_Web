import React from "react";
import { useParams } from "react-router-dom";
import { jobdetails } from "../Career/CareerData";
import "../Career/Career.css";

function CareerDetails() {
  const { id } = useParams();
  const data = jobdetails.find((item) => item.id === parseInt(id));

  return (
    <>
      <div>
        <div class="container mt-4">
          <div class="row p-3">
            <div class="col-12 col-md-7  car-col-left">
              <div className="">
                <article>
                  <header className="job-title pad-4">
                    <h1
                      className="display-6   "
                      style={{ fontWeight: "370", color: "#1e232e" }}
                    >
                      {data.title}
                    </h1>
                    <div className="d-flex">
                      <p className="m-2">
                        <a
                          href="#"
                          className=""
                          style={{ textDecoration: "none", color: "#1e232e" }}
                        >
                          {" "}
                          <i
                            className="fa fa-building"
                            aria-hidden="true"
                          ></i>{" "}
                          {data.jobarea}
                        </a>
                      </p>
                      <p className="m-2">
                        {" "}
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "#1e232e" }}
                        >
                          {" "}
                          <i
                            className="fa fa-briefcase"
                            aria-hidden="true"
                          ></i>{" "}
                          {data.jobtime}
                        </a>
                      </p>
                      <p className="m-2">
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "#1e232e" }}
                        >
                          {" "}
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>{" "}
                          {data.location}
                        </a>
                      </p>
                    </div>
                  </header>
                  <section className=" p-4">
                    <p className="head-text mb-2">Description:</p>
                    <p className="fs-5 mb-2 ">
                      <div>
                        <p className="fw-noraml" style={{ fontSize: "17px" }}>
                          
                          {data.about}
                        </p>
                      </div>
                    </p>
                    <p className="head-text mt-4">Responsibilities:</p>
                    <p className="fs-5 desc-para">
                      <div>
                        {data.resposibilities[0] &&
                          Object.values(data.resposibilities[0]).map(
                            (responsibility, index) => (
                              <p
                                key={index}
                                className="fw-noraml"
                                style={{ fontSize: "17px" }}
                              >
                                {responsibility}
                              </p>
                            )
                          )}
                      </div>
                    </p>

                    <p className=" head-text mt-4">
                      Experience and Skills:
                    </p>
                    <p className="fs-5 mb-2 desc-para">
                      <div>
                        {data.experience[0] &&
                          Object.values(data.experience[0]).map(
                            (exp, index) => (
                              <p
                                key={index}
                                className="fw-noraml"
                                style={{ fontSize: "17px" }}
                              >
                                {exp}
                              </p>
                            )
                          )}
                      </div>
                    </p>
                  </section>
                </article>
              </div>
            </div>

            <div class="col-12 col-md-4 p-2 car-col-right">
              <p className="head-text pad-4">Apply for this Job &#8594;</p>

              <form action="" className="p-4 rounded mb-4 form">
                <div className="">
                  <div className="col-12 mb-3">
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
                  <div className="col-12 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="JohnDoe@example.com"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="XXXXX XXX00"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label class="d-block mb-4">
                      <span class="form-label d-block">Job Type </span>
                      <select required name="job" class="form-select">
                        <option value="default" selected>
                          {data.jobselect}
                        </option>
                        <option>Software Support Engineer</option>
                        <option>Software Engineer - Java</option>
                        <option>Senior Quality Analyst</option>
                        <option>Software Engineer - Nodejs/Angular</option>
                        <option>Dev Ops Engineer - Google Cloud</option>
                        <option>Data Engineer</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label d-block">
                      Years of experience
                    </label>
                    <select required name="experience" className="form-select">
                      <option>Less than a year</option>
                      <option>1 - 2 years</option>
                      <option>2 - 4 years</option>
                      <option>4 - 7 years</option>
                      <option>7 - 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
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
                  <div className="col-12 mb-3">
                    <label className="form-label d-block">
                      Upload Your Resume
                    </label>
                    <input
                      required
                      name="cv"
                      type="file"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 mt-3">
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
      </div>
    </>
  );
}

export default CareerDetails;
