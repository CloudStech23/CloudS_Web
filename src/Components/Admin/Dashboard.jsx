import React, { useState, useEffect } from "react";
import "../Admin/Admin.css"; // Import your CSS file for styling
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./Changepassword";
import logo from '../Images/cloudslogo.png'
 

function Dashboard() {
  const navigate = useNavigate();
  const handlelogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/Signin");
    }
  };

  const [activeButton, setActiveButton] = useState("default"); // State to track active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update active button state when clicked
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp, 10)); // Convert to integer and create Date object
    return date.toLocaleString(); // Convert to human-readable string
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        {/* <div className="sidebar-heading border-bottom bg-light p-2" style={{whiteSpace:'nowrap'}} >Start Bootstrap</div> */}
        <div className="list-group list-group-flush">
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonClick("UQ")}
          >
            Users Queries
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonClick("JA")}
          >
            Job Applications
          </a>
          {/* <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Data Collections</a> */}
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonClick("AJ")}
          >
            Add Job
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonClick("CP")}
          >
            Change Password
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleButtonClick("P")}
          >
            Profile
          </a>
          <a
            type="button"
            href="/"
            className="list-group-item list-group-item-action list-group-item-light p-3"
            style={{ cursor: "pointer" }}
            onClick={handlelogout}
          >
            Logout
          </a>
        </div>
      </div>

      <div
        id="page-content-wrapper"
        className="flex-grow-1 d-flex justify-content-center align-items-center"
      >
        {/* <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <button className="signbtn  " onClick={toggleSidebar}>
              <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
             
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              {activeButton === "default" && (
                <div>
                  <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid mb-4 dashlogo"
                     
                  />
                  <h1 className="display-4">Welcome to the Dashboard</h1>
                  <p className="lead">This is the default content.</p>
                </div>
              )}
              {activeButton === "UQ" && (
                <div>
                  <div>
                    <iframe
                      src="https://docs.google.com/spreadsheets/d/1xgctq0A4Ktn5HHyLJgyw0itGa2DwKxdN0V5EhnSMHoo/edit#gid=0"
                      frameborder="0"
                      height="500"
                      width="1000"
                    ></iframe>
                  </div>
                </div>
              )}
              {activeButton === "JA" && <div>I am application</div>}
              {activeButton === "AJ" && <div>Add a new job here.</div>}
              {activeButton === "CP" && (
                <div>
                  <ChangePassword />
                </div>
              )}
              {activeButton === "P" && (
                <div>
                  <section
                    class="vh-100"
                    style={{ backgroundColor: "#f4f5f7" }}
                  >
                    <div class="container py-5 h-100">
                      <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-6 mb-4 mb-lg-0">
                          <div
                            class="card mb-3"
                            style={{ borderRadius: ".5rem" }}
                          >
                            <div class="row g-0">
                              <div
                                class="col-md-4 gradient-custom text-center text-white"
                                style={{
                                  borderTopLeftRadius: ".5rem",
                                  borderBottomLeftRadius: ".5rem",
                                }}
                              >
                                <img
                                  src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                                  alt="Avatar"
                                  class="img-fluid"
                                  style={{ width: "80px;", marginTop: "3rem" }}
                                />
                                <p className="text-dark">Welcome, User</p>
                                <p className="text-dark">Admin</p>
                                <i class="far fa-edit mb-5"></i>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body p-4">
                                  <h6>Information</h6>
                                  <hr class="mt-0 mb-4" />
                                  <div class="row pt-1">
                                    <div class="col-6 mb-3">
                                      <h6>Email</h6>
                                      <p class="text-muted">{user.email}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                      <strong style={{ whiteSpace: "normal" }}>
                                        Email Verified
                                      </strong>
                                      <p class="text-muted">
                                        {user.emailVerified ? "Yes" : "No"}
                                      </p>
                                    </div>
                                  </div>
                                  <h6>Other</h6>
                                  <hr class="mt-0 mb-4" />
                                  <div class="row pt-1">
                                    <div class="col-12 mb-3">
                                      <h6>Last Login</h6>
                                      <p class="text-muted">
                                        {formatDate(user.lastLoginAt)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
