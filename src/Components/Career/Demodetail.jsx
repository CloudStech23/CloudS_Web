import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import "../Career/Career.css";

function Demodetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              ...childSnapshot.val()
            };
            if (jobData.id === id) {
              jobFound = jobData;
            }
          });
          if (jobFound) {
            setJob(jobFound);
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
      <article>
        <header className="job-title pad-4">
          <h1 className="display-6" style={{ fontWeight: "370", color: "#1e232e" }}>
            {job.title}
          </h1>
          <div className="d-flex">
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-building" aria-hidden="true"></i> {job.jobArea}
              </a>
            </p>
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-briefcase" aria-hidden="true"></i> {job.jobTime}
              </a>
            </p>
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}
              </a>
            </p>
          </div>
        </header>
        <section className="p-4">
          <p className="head-text mb-2">Description:</p>
          <div>
            <p className="fw-normal" style={{ fontSize: "17px" }}>
              {job.about}
            </p>
          </div>
          <p className="head-text mt-4">Responsibilities:</p>
          <div>
            {job.responsibilities &&
              job.responsibilities.map((responsibility, index) => (
                <p key={index} className="fw-normal" style={{ fontSize: "17px" }}>
                  {responsibility}
                </p>
              ))}
          </div>
          <p className="head-text mt-4">Experience and Skills:</p>
          <div>
            {job.experience &&
              job.experience.map((exp, index) => (
                <p key={index} className="fw-normal" style={{ fontSize: "17px" }}>
                  {exp}
                </p>
              ))}
          </div>
        </section>
      </article>
    </div>
  );
}

export default Demodetail;
