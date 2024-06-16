import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../Admin/Firebase'; // Adjust the path as per your project structure
import './Admin.css';
import { Link } from 'react-router-dom';

function Updatejob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching job listings");
        const jobCollection = collection(firestore, "Job-card");
        const jobSnapshot = await getDocs(jobCollection);
        const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobs(jobList);
        console.log("Job listings fetched:", jobList);
      } catch (error) {
        console.error("Error fetching job listings: ", error);
        setError("Error fetching job listings: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteJob = async (id) => {
    try {
      console.log("Deleting job with ID:", id);
      await deleteDoc(doc(firestore, 'Job-card', id));
      console.log(`Job with ID ${id} successfully deleted.`);
      setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
      setError("Error deleting job: " + error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container mt-5 pt-4">
        <div className="row align-items-end mb-4 pb-2">
          <div className="col-md-8">
            <div className="section-title text-center text-md-start">
              <h4 className="title mb-4">Explore our latest job opportunities and join our team!</h4>
              <p className="text-muted mb-0 para-desc">
                Experience our proficiency! Reach out to us to get started.
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
            <div className="text-center text-md-end">
              <a href="#" className="text-dark">
                View Jobs on <i className="fa fa-linkedin-square" style={{fontSize:'1.5rem'}} aria-hidden="true"></i> {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right fea icon-sm"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {jobs.map((data) => (
            <div key={data.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mb-4">
              <div className="card border-0 bg-light rounded shadow mb-2">
                <div className="card-body p-4">
                  <h5>{data.title}</h5>
                  <div className="mt-3">
                    <span className="text-muted d-block">
                      <i className="fa fa-building" aria-hidden="true"></i>
                      <a href="#" target="_blank" className="text-muted"> {data.businessArea}</a>
                    </span>
                    <span className="text-muted d-block">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      <a href="#" target="_blank" className="text-muted"> {data.company}</a>
                    </span>
                    <span className="text-muted d-block">
                      <i className="fa fa-map-marker" aria-hidden="true"></i> {data.location}
                    </span>
                  </div>

                  <div className="mt-3">
                    <button onClick={() => handleDeleteJob(data.id)} className="btn Careerbtn-primary ms-2">Delete</button>
                    {/* <Link to={`/Career/${data.id}`} className="btn Careerbtn-primary ms-2">View Details</Link> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Updatejob;
