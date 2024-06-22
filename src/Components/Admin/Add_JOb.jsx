import React, { useState,useEffect } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import "../Admin/Admin.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AddJob() {
  const generateUniqueId = () => uuidv4();
  const navigate = useNavigate();
  const location = useLocation();
  const { jobToUpdate } = location.state || {};

  const initialFormData = jobToUpdate ? { ...jobToUpdate } : {
    id: generateUniqueId(),
    title: "",
    company: "",
    businessArea: "",
    location: "",
    about: "",
    responsibilities: [""],
    experience: [""],
    jobTime: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const companies = [
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Cloud Engineer",
    "Systems Engineer",
    "Network Engineer",
    "Security Engineer",
    "Database Administrator",
    "IT Support Specialist",
    "QA Engineer",
    "Mobile Developer",
    "Embedded Systems Engineer",
    "IoT Developer",
    "Blockchain Developer",
    "Game Developer",
    "AR/VR Developer",
    "Site Reliability Engineer",
    "Solutions Architect",
    "Technical Writer",
    "Product Manager",
    "IT Project Manager",
    "Software Tester",
    "Application Support Engineer",
    "Release Manager",
    "Build Engineer",
  ];

  const businessAreas = [
    "Technology",
    "Hardware",
    "IoT",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Networking",
    "Software Development",
    "Data Science",
    "Automation",
    "Robotics",
    "Augmented Reality",
    "Virtual Reality",
    "Blockchain",
    "Web Development",
    "Mobile Development",
    "Database Management",
    "DevOps",
    "E-commerce",
    "Gaming",
    "Telecommunications",
    "Big Data",
    "Healthcare Technology",
    "Financial Technology",
    "Education Technology",
    "Environmental Technology",
    "Legal Technology",
    "Smart Cities",
    "Quantum Computing",
  ];

  const workTimes = ["Full-time", "Part-time", "Contract"];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (jobToUpdate) {
      setFormData(jobToUpdate);
    }
  }, [jobToUpdate]);

  const handleArrayChange = (index, e, arrayName) => {
    const values = [...formData[arrayName]];
    values[index] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [arrayName]: values,
    }));
  };

  const handleAddField = (arrayName) => {
    setFormData((prevState) => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], ""],
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.title) {
      formIsValid = false;
      errors["title"] = "Please select Title";
    }

    if (!formData.company) {
      formIsValid = false;
      errors["company"] = "Please select Company";
    }

    if (!formData.businessArea) {
      formIsValid = false;
      errors["businessArea"] = "Please select business area";
    }

    if (!formData.location) {
      formIsValid = false;
      errors["location"] = "Please enter Location";
    }

    if (!formData.about) {
      formIsValid = false;
      errors["about"] = "Please Fill The Description";
    }

    if (!formData.jobTime) {
      formIsValid = false;
       
      errors["jobTime"] = "Please select Working Time";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const db = getDatabase();
    const careerRef = ref(db, "Career");

    try {
      const dataToSubmit = {
        ...formData,
        responsibilities: formData.responsibilities.filter(
          (item) => item !== ""
        ),
        experience: formData.experience.filter((item) => item !== ""),
      };

      const newCareerRef = push(careerRef);
      await set(newCareerRef, dataToSubmit);

      setFormData(initialFormData);
      setErrors({});

      alert("Job data submitted successfully");
      navigate("/demo");
    } catch (error) {
      console.error("Error submitting job data: ", error);
    }
  };

  return (
    <div>
      <div className="text-center h2 mt-3 text-dark">Job Advertisment Form</div>
      <form
        className="mt-4 mb-4 p-4 rounded"
        style={{ boxShadow:'-1px 0px 17px 6px #c2c2c2',
      }}
        onSubmit={handleSubmitForm}
      >
        <div className="row mb-4 mt-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="id">
                Id ( Not editable! )
              </label>
              <input
                type="text"
                id="id"
                className="form-control"
                value={formData.id}
                readOnly
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="title">
                Title ( Enter the Title of Job )
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="company">
                Select Job Field
              </label>
              <select
                id="company"
                className="form-control"
                value={formData.company}
                onChange={handleInputChange}
              >
                <option value="">Select Job Field</option>
                {companies.map((company, index) => (
                  <option key={index} value={company}>
                    {company}
                  </option>
                ))}
              </select>
              {errors.company && <span className="error">{errors.company}</span>}
            </div>
          </div>

          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="location">
                Location ( Enter the Primary )
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                value={formData.location}
                onChange={handleInputChange}
              />
              {errors.location && <span className="error">{errors.location}</span>}
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="about">
            Write Description About the Job
          </label>
          <textarea
            className="form-control"
            id="about"
            rows="4"
            value={formData.about}
            onChange={handleInputChange}
            required
          ></textarea>
          {errors.about && <span className="error">{errors.about}</span>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="responsibilities">
            Enter Job Responsibilities ( Please write the responsibility in lines / line wise if it is in paragraph )
          </label>
          {formData.responsibilities.map((responsibility, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control mb-2"
                value={responsibility}
                required
                onChange={(e) =>
                handleArrayChange(index, e, "responsibilities")
                
                }
              />
            </div>
          ))}
          <button
            type="button"
            className="signbtn2"
            onClick={() => handleAddField("responsibilities")}
          >
          <span><i className="fa fa-plus"></i></span>  Add Responsibility
          </button>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="experience">
          Enter Job Experience & Skills ( Please write the Experience and skills in lines / line wise if it is in paragraph )
          </label>
          {formData.experience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control mb-2"
                value={exp}
                required
                onChange={(e) => handleArrayChange(index, e, "experience")}
              />
            </div>
          ))}
          <button
            type="button"
            className="signbtn2"
            onClick={() => handleAddField("experience")}
          >
            <span><i className="fa fa-plus"></i></span> Add Experience
          </button>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <label className="form-label" htmlFor="jobTime">
                Type Of Working Time
              </label>
              <select
                id="jobTime"
                className="form-control"
                value={formData.jobTime}
                onChange={handleInputChange}
                
              >
                <option value="">Select Job Time</option>
                {workTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.jobTime && <span className="error">{errors.jobTime}</span>}
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="businessArea">
                Business Area of Job
              </label>
              <select
                id="businessArea"
                className="form-control"
                value={formData.businessArea}
                onChange={handleInputChange}
              >
                <option value="">Select Business Area</option>
                {businessAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.businessArea && <span className="error">{errors.businessArea}</span>}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="signbtn2" type="submit">
            Submit Job Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;