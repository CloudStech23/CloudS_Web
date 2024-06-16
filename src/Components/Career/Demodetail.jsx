import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../Admin/Firebase"; // Adjust the import path as needed
import { doc, getDoc } from "firebase/firestore";
import "../Career/Career.css";

function Demodetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching document with ID: ${id}`); // Debug log
        const docRef = doc(firestore, "Job-card", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data()); // Debug log
          setData(docSnap.data());
        } else {
          console.error("No such document!");
          setError("No such document found.");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
        setError("Error fetching document: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    if (id) {
      fetchData();
    } else {
      console.error("Invalid document ID");
      setError("Invalid document ID");
      setLoading(false);
    }
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No such document found.</div>;
  }

  return (
    <div>
      <article>
        <header className="job-title pad-4">
          <h1 className="display-6" style={{ fontWeight: "370", color: "#1e232e" }}>
            {data.title}
          </h1>
          <div className="d-flex">
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-building" aria-hidden="true"></i> {data.jobArea}
              </a>
            </p>
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-briefcase" aria-hidden="true"></i> {data.jobTime}
              </a>
            </p>
            <p className="m-2">
              <a href="#" style={{ textDecoration: "none", color: "#1e232e" }}>
                <i className="fa fa-map-marker" aria-hidden="true"></i> {data.Location}
              </a>
            </p>
          </div>
        </header>
        <section className="p-4">
          <p className="head-text mb-2">Description:</p>
          <div>
            <p className="fw-normal" style={{ fontSize: "17px" }}>
              {data.about}
            </p>
          </div>
          <p className="head-text mt-4">Responsibilities:</p>
          <div>
            {data.responsibilities &&
              data.responsibilities.map((responsibility, index) => (
                <p key={index} className="fw-normal" style={{ fontSize: "17px" }}>
                  {responsibility}
                </p>
              ))}
          </div>
          <p className="head-text mt-4">Experience and Skills:</p>
          <div>
            {data.experience &&
              data.experience.map((exp, index) => (
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
