import React, { useState, useEffect } from "react";
import { database } from "./Firebase";
import { ref, onValue, off, update, remove } from "firebase/database";
 
 

function Applications() {
  const [applicants, setApplicants] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const applicantsRef = ref(database, "Application");

    const unsubscribe = onValue(applicantsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map(key => ({
          ...data[key],
          id: key,
        }));
        setApplicants(formattedData);
      } else {
        setApplicants([]);
      }
    });

    // Cleanup subscription on unmount
    return () => off(applicantsRef, "value", unsubscribe);
  }, []);

  const handleCheckboxChange = (id, isChecked) => {
    // Update local state immediately
    setApplicants(prevApplicants => 
      prevApplicants.map(applicant => 
        applicant.id === id ? { ...applicant, checked: isChecked } : applicant
      )
    );

    // Update Firebase
    const applicantRef = ref(database, `Application/${id}`);
    update(applicantRef, { checked: isChecked });
  };

  const handleDelete = (id) => {
    const applicantRef = ref(database, `Application/${id}`);
    remove(applicantRef).then(() => {
      // Update local state to remove the deleted applicant
      setApplicants(prevApplicants => prevApplicants.filter(applicant => applicant.id !== id));
    }).catch(error => {
      console.error("Error removing document: ", error);
    });
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    const modal = new window.bootstrap.Modal(document.getElementById('messageModal'));
    modal.show();
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Type</th>
            <th>Years of Experience</th>
            <th>Message</th>
            <th>Resume File</th>
            <th>Remark</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index}>
              <td>{applicant.FullName}</td>
              <td>{applicant.Email}</td>
              <td>{applicant.Phone}</td>
              <td>{applicant.JobType}</td>
              <td>{applicant.Experience}</td>
              <td 
                onClick={() => handleMessageClick(applicant.Message)} 
                style={{ cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}
              >
                {applicant.Message}
              </td>
              <td>{applicant.resumeFile ? applicant.resumeFile.name : 'No file uploaded'}</td>
              <td>
                <input
                  type="checkbox"
                  checked={applicant.checked || false}
                  onChange={(e) => handleCheckboxChange(applicant.id, e.target.checked)}
                />
              </td>
              <td>
                <button className="signbtn" onClick={() => handleDelete(applicant.id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className="modal fade" id="messageModal" tabIndex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="messageModalLabel">Message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedMessage}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
