import React, { useState } from "react";
import { firestore } from './Firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';
import '../Admin/Admin.css';

function AddJob() {
  const initialForm1Data = {
    id: '',
    title: '',
    company: '',
    businessArea: '',
    location: ''
  };

  const initialForm2Data = {
    id: '',
    title: '',
    about: '',
    responsibilities: [''],
    experience: [''],
    location: '',
    jobArea: '',
    jobSelect: '',
    jobTime: ''
  };

  const [form1Data, setForm1Data] = useState(initialForm1Data);
  const [form2Data, setForm2Data] = useState(initialForm2Data);

  const handleInputChange = (e, formSetter) => {
    const { id, value } = e.target;
    formSetter(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleArrayChange = (index, e, arrayName, formSetter) => {
    const values = [...form2Data[arrayName]];
    values[index] = e.target.value;
    formSetter(prevState => ({
      ...prevState,
      [arrayName]: values
    }));
  };

  const handleAddField = (arrayName, formSetter) => {
    formSetter(prevState => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], '']
    }));
  };

  const handleSubmitForm1 = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'Job-card'), form1Data);
      alert("Job card data submitted successfully");
      setForm1Data(initialForm1Data); // Clear the form
    } catch (error) {
      console.error("Error submitting form 1 data: ", error);
    }
  };

  const handleSubmitForm2 = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, 'Job-details'), {
        ...form2Data,
        responsibilities: form2Data.responsibilities.filter(item => item !== ''),
        experience: form2Data.experience.filter(item => item !== '')
      });
      alert("Job details data submitted successfully");
      setForm2Data(initialForm2Data); // Clear the form
    } catch (error) {
      console.error("Error submitting form 2 data: ", error);
    }
  };

  return (
    <div>
      <form className="mt-4 mb-4 p-4" style={{border:'1px solid green'}} onSubmit={handleSubmitForm1}>
        <div className="row mb-4 mt-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="id">Id</label>
              <input type="number" id="id" className="form-control" value={form1Data.id} onChange={(e) => handleInputChange(e, setForm1Data)} />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="title">Title</label>
              <input type="text" id="title" className="form-control" value={form1Data.title} onChange={(e) => handleInputChange(e, setForm1Data)} />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="company">Company</label>
              <input type="text" id="company" className="form-control" value={form1Data.company} onChange={(e) => handleInputChange(e, setForm1Data)} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="businessArea">Business Area</label>
              <input type="text" id="businessArea" className="form-control" value={form1Data.businessArea} onChange={(e) => handleInputChange(e, setForm1Data)} />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="location">Location</label>
              <input type="text" id="location" className="form-control" value={form1Data.location} onChange={(e) => handleInputChange(e, setForm1Data)} />
            </div>
          </div>
          <div>
            <button className="signbtn2" type="submit">Create Card</button>
          </div>
        </div>
      </form>

      <form className="mb-4 mt-4 p-4" style={{border:'1px solid red'}} onSubmit={handleSubmitForm2}>
        <div className="row mt-4">
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="id">Id</label>
              <input type="text" id="id" className="form-control" value={form2Data.id} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="title">Title</label>
              <input type="text" id="title" className="form-control" value={form2Data.title} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="about">About</label>
            <textarea className="form-control" id="about" rows="4" value={form2Data.about} onChange={(e) => handleInputChange(e, setForm2Data)}></textarea>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="responsibilities">Responsibilities</label>
            {Array.isArray(form2Data.responsibilities) && form2Data.responsibilities.map((responsibility, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={responsibility}
                  onChange={(e) => handleArrayChange(index, e, 'responsibilities', setForm2Data)}
                />
              </div>
            ))}
            <button type="button" className="signbtn2" onClick={() => handleAddField('responsibilities', setForm2Data)}>
              Add Responsibility
            </button>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="experience">Experience</label>
            {Array.isArray(form2Data.experience) && form2Data.experience.map((exp, index) => (
              <div key={index}>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={exp}
                  onChange={(e) => handleArrayChange(index, e, 'experience', setForm2Data)}
                />
              </div>
            ))}
            <button type="button" className="signbtn2" onClick={() => handleAddField('experience', setForm2Data)}>
              Add Experience
            </button>
          </div>
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="location">Location</label>
              <input type="text" id="location" className="form-control" value={form2Data.location} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="jobArea">Job Area</label>
              <input type="text" id="jobArea" className="form-control" value={form2Data.jobArea} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="jobSelect">Job Select</label>
              <input type="text" id="jobSelect" className="form-control" value={form2Data.jobSelect} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div className="col-4">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="jobTime">Job Time</label>
              <input type="text" id="jobTime" className="form-control" value={form2Data.jobTime} onChange={(e) => handleInputChange(e, setForm2Data)} />
            </div>
          </div>
          <div>
            <button className="signbtn2" type="submit">Upload Job details</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
