import React, { useState, useEffect } from "react";
import { database } from "./Firebase";
import { ref, onValue, off } from "firebase/database";

function Applications() {
  const [applicants, setApplicants] = useState([]);

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Type</th>
            <th>Years of Experience</th>
            <th>Message</th>
            <th>Resume File</th>
            <th>Remark</th>
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
              <td>{applicant.Message}</td>
              <td>{applicant.resumeFile ? applicant.resumeFile.name : 'No file uploaded'}</td>
              <td><input type="checkbox" name="remark" id="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
