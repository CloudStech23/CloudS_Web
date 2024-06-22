import React, { useState, useEffect } from 'react';
import { database } from "./Firebase";
import { ref, onValue, off, remove } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Updatejob() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const jobRef = ref(database, "Career");
    const unsubscribe = onValue(jobRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map(key => ({
          ...data[key],
          id: key,
        }));
        setJobs(formattedData);
      } else {
        setJobs([]);
      }
    });

    // Cleanup subscription on unmount
    return () => off(jobRef, "value", unsubscribe);
  }, []);

  const handleDelete = (id) => {
    const jobRef = ref(database, `Career/${id}`);
    const jobToDelete = jobs.find(job => job.id === id);

    remove(jobRef)
      .then(() => {
        setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        alert(`Advertisement for "${jobToDelete.title}" Job is Deleted Successfully`);
      })
      .catch(error => {
        console.error("Error removing job: ", error);
      });
  };

  const handleUpdate = (job) => {
    navigate(`/update-job/${job.id}`, { state: { jobToUpdate: job } });
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mb-4">
            <div className="card border-0 bg-light rounded shadow mb-2">
              <div className="card-body p-4">
                <h5>{job.title}</h5>
                <div className="mt-3">
                  <span className="text-muted d-block">
                    <i className="fa fa-building" aria-hidden="true"></i>
                    {job.businessArea}
                  </span>
                  <span className="text-muted d-block">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    {job.company}
                  </span>
                  <span className="text-muted d-block">
                    <i className="fa fa-map-marker" aria-hidden="true"></i> {job.location}
                  </span>
                </div>

                <div className="mt-3">
                  <button onClick={() => handleDelete(job.id)} className="btn Careerbtn-primary ms-2">Delete</button>
                  <button onClick={() => handleUpdate(job)} className="btn Careerbtn-primary ms-2">Update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updatejob;
