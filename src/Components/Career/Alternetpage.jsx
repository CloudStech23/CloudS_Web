import React from "react";

function Alternetpage() {
  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center p-5 bg-white rounded shadow">
        <div className="d-inline-block text-da py-1 mb-2 px-3 my-auto display-5 ">
        <i class="fa fa-file-text" aria-hidden="true"></i>
        </div>
        <p className="lead fw-normal text-muted mb-3">
          Thank you for your interest.
        </p>
        <p>Unfortunately, we are not hiring at this time.</p>
        <p className=" fw-normal text-muted mb-3">
        Please check back as we will most certainly be looking for great people to join our team in the future!
        </p>
      </div>
    </section>
  );
}

export default Alternetpage;
