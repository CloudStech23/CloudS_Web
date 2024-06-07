import React, { useState } from "react";
import { auth } from "./Firebase";
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword , setShowPassword] = useState(null)
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setSuccess("Password updated successfully!");
        navigate("/dashboard");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("No user is signed in.");
    }
  };

  const togglePasswordVisibility = ()=>{
    setShowPassword(!showPassword)
  }
   

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "400px", padding: "20px" }}>
        <div className="card-body">
          <form onSubmit={handleChangePassword}>
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
                placeholder="Current Password"
                type={showPassword ? "text":"password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
               <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ height: "36px" }}
              ><i className={showPassword?"fa fa-eye":"fa fa-eye-slash"} ></i></span>
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
                placeholder="New Password"
                type={showPassword ? "text":"password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ height: "36px" }}
              ><i className={showPassword?"fa fa-eye":"fa fa-eye-slash"} ></i></span>
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
                placeholder="Confirm New Password"
                type={showPassword ? "text":"password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ height: "36px" }}
              ><i className={showPassword?"fa fa-eye":"fa fa-eye-slash"} ></i></span>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}

            <div className="form-group d-flex justify-content-center">
              <button
                type="submit"
                className="signbtn p-2 rounded"
                style={{ width: "100%" }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
