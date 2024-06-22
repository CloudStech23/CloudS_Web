// SignIn.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "../Admin/Admin.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State to store error messages
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null); // Reset error state

    // Basic validation for email format
    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      // Redirect the user to the desired page after successful sign-in
      navigate("/dashboard");

      const alert = document.createElement("div");
      alert.className = "alert";
      alert.innerText = "Admin Logged-in";

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
    }
    catch (error) {
      console.error("Sign in error:", error);
      setError("Incorrect UserEmail or Password !"); // Set the error message to display to the user
    }
  };



  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "400px", padding: "20px" }}>
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <div
              className={`text-center mb-2 ${error ? "p-2" : ""}`}
              style={{
                border: `${error ? "1px solid #98bae742":""}`,
                background: "#98bae742",
                color: "red",
              }}
            >
              {error}
            </div>

            <div className="form-group input-group mb-3">
              <div
                className="input-group-prepend"
                style={{ marginRight: "5px" }}
              >
                <span className="input-group-text" style={{ height: "36px" }}>
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email" // Added name attribute
                autoComplete="email" // Added autocomplete attribute
              />
            </div>

            <div className="form-group input-group mb-3">
              <div
                className="input-group-prepend"
                style={{ marginRight: "5px" }}
              >
                <span className="input-group-text" style={{ height: "36px" }}>
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password" // Added name attribute
                autoComplete="current-password" // Added autocomplete attribute
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ height: "36px" }}
              >
                <i
                  className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                ></i>
              </span>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="signbtn p-2 rounded"
                style={{ width: "100%" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
