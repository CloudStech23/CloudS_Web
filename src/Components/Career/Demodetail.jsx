import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue, push } from "firebase/database";
import "../Career/Career.css";

function Demodetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    JobType: "",
    Experience: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const dbRef = ref(db, "Application");
    push(dbRef, formdata)
      .then(() => {
        setFormdata({
          FullName: "",
          Email: "",
          Phone: "",
          JobType: "",
          Experience: "",
          Message: "",
        });
        const alert = document.createElement("div");
        alert.className = "alert";
        alert.innerText = "Form submitted successfully!";

        // Append alert to body
        document.body.appendChild(alert);

        // Show alert
        setTimeout(() => {
          alert.classList.add("show");
        }, 10); // small timeout to allow transition

        // Hide alert after 2 seconds
        setTimeout(() => {
          alert.classList.remove("show");
          // Remove alert after transition
          setTimeout(() => {
            document.body.removeChild(alert);
          }, 500); // match this time to CSS transition duration
        }, 2000);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    const fetchData = () => {
      const db = getDatabase();
      const jobRef = ref(db, "Career");

      onValue(jobRef, (snapshot) => {
        if (snapshot.exists()) {
          let jobFound = null;
          snapshot.forEach((childSnapshot) => {
            const jobData = {
              id: childSnapshot.key,
              ...childSnapshot.val(),
            };
            if (jobData.id === id) {
              jobFound = jobData;
            }
          });
          if (jobFound) {
            setJob(jobFound);
            setFormdata((prevState) => ({
              ...prevState,
              JobType: jobFound.title,
            }));
          } else {
            console.log("No matching job found");
            setJob(null);
          }
        } else {
          console.log("No data available");
        }
        setLoading(false);
      }, (error) => {
        console.error("Error fetching job listings: ", error);
        setError("Error fetching job listings: " + error.message);
        setLoading(false);
      });
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return <div>No such document found.</div>;
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="row p-3">
          <div className="col-12 col-md-7 car-col-left">
            <div>
              <article>
                <header className="job-title pad-4">
                  <h1
                    className="display-6"
                    style={{ fontWeight: "370", color: "#1e232e" }}
                  >
                    {job.title}
                  </h1>
                  <div className="d-flex">
                    <p className="m-2">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "#1e232e" }}
                      >
                        <i className="fa fa-building" aria-hidden="true"></i>{" "}
                        {job.businessArea}
                      </a>
                    </p>
                    <p className="m-2">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "#1e232e" }}
                      >
                        <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                        {job.jobTime}
                      </a>
                    </p>
                    <p className="m-2">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "#1e232e" }}
                      >
                        <i
                          className="fa fa-map-marker"
                          aria-hidden="true"
                        ></i>{" "}
                        {job.location}
                      </a>
                    </p>
                  </div>
                </header>
                <section className="p-4">
                  <p className="head-text mb-2">Description:</p>
                  <p className="fs-5 mb-2">
                    <div>
                      <p className="fw-normal" style={{ fontSize: "17px" }}>
                        {job.about}
                      </p>
                    </div>
                  </p>
                  <p className="head-text mt-4">Responsibilities:</p>
                  <p className="fs-5 desc-para">
                    <div>
                      {job.responsibilities &&
                        job.responsibilities.map((responsibility, index) => (
                          <p
                            key={index}
                            className="fw-normal"
                            style={{ fontSize: "17px" }}
                          >
                            {responsibility}
                          </p>
                        ))}
                    </div>
                  </p>

                  <p className="head-text mt-4">Experience and Skills:</p>
                  <p className="fs-5 mb-2 desc-para">
                    <div>
                      {job.experience &&
                        job.experience.map((exp, index) => (
                          <p
                            key={index}
                            className="fw-normal"
                            style={{ fontSize: "17px" }}
                          >
                            {exp}
                          </p>
                        ))}
                    </div>
                  </p>
                </section>
              </article>
            </div>
          </div>

          <div className="col-12 col-md-4 p-2 car-col-right">
            <p className="head-text pad-4">Apply for this Job &#8594;</p>

            <form
              action=""
              className="p-4 rounded mb-4 form"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="col-12 mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    name="FullName"
                    required
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={formdata.FullName}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    required
                    placeholder="JohnDoe@example.com"
                    onChange={handleChange}
                    value={formdata.Email}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="Phone"
                    name="Phone"
                    placeholder="XXXXX XXX00"
                    onChange={handleChange}
                    value={formdata.Phone}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="d-block mb-4">
                    <span className="form-label d-block">Job Type </span>
                    <input
                      required
                      name="JobType"
                      id="JobType"
                      className="form-control"
                      value={formdata.JobType}
                      onChange={handleChange}
                      readOnly
                    />
                  </label>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label d-block">
                    Years of experience
                  </label>
                  <select
                    required
                    name="Experience"
                    id="Experience"
                    value={formdata.Experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="" disabled>
                      Select experience level
                    </option>
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
                    id="Message"
                    name="Message"
                    rows="3"
                    required
                    placeholder="What motivates you?"
                    onChange={handleChange}
                    value={formdata.Message}
                  ></textarea>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-grid">
                    <button
                      className="btn Careerbtn-primary btn-lg"
                      type="submit"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Submit Application
                    </button>
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

export default Demodetail;
