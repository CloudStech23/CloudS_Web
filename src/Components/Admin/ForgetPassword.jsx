import React, { useState } from "react";
import { auth } from "./Firebase";

function ForgetPassword() {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [email] = useState("t*******ry@gmail.com"); // Replace with actual email
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleSendOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Simulate sending OTP to the email
    console.log(`Sending OTP ${randomOtp} to ${email}`);
    // Here you can integrate actual email sending logic if needed

    // Set OTP and mark as sent
    setGeneratedOtp(randomOtp);
    setOtpSent(true);
    alert("OTP sent to your email");
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert("OTP verified");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="text-center p-4 bg-white rounded shadow">
          <p className="lead fw-normal text-muted mb-3">
            If you've forgotten your password, an OTP will be sent to your registered email
          </p>
          <p style={{ whiteSpace: "nowrap" }}>
            OTP will be sent to this Email <span style={{ color: "gray" }}>{email}</span>
            <button onClick={handleSendOtp}>Click To Verify</button>
          </p>
          {otpSent && (
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={handleVerifyOtp}>Verify OTP</button>
            </div>
          )}
          <p className="fw-normal text-muted mt-3">
            Please check back as we will most certainly be looking for great
            people to join our team in the future!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;
