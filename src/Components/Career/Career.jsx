import React from "react";
import "../Career/Career.css";
import {jobs} from '../Career/CareerData';
 import { Link, useNavigate } from "react-router-dom";
import FadeOnScroll from "../Animated/motion";

function Career( ) {
  
   
  return (
    <div>
      <div className="container mt-5 pt-4">
        <div className="row align-items-end mb-4 pb-2">
          <div className="col-md-8">
            <div className="section-title text-center text-md-start">
              <h4 className="title mb-4">Explore our latest job opportunities and join our team!</h4>
              <p className="text-muted mb-0 para-desc">
              Experience our proficiency!, Reach out to us to get started
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
            <div className="text-center text-md-end">
              {/* <a href="#" className="text-dark" >
                View Jobs on <i class="fa fa-linkedin-square " style={{fontSize:'1.5rem'}} aria-hidden="true"></i> {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right fea icon-sm"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a> */}
            </div>
          </div>
        </div>

        <div className="row">
          {jobs.map((data) => (
            <div key={data.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2 mb-4">
              <FadeOnScroll animation='up'>

              <div className="card border-0 bg-light rounded shadow mb-2">
                <div className="card-body p-4">
                  <h5>{data.title}</h5>
                  <div className="mt-3">
                    <span className="text-muted d-block">
                      <i className="fa fa-building" aria-hidden="true"></i>
                      <span href="#" target="_blank" className="text-muted">{data.businessArea}</span>
                    </span>
                    <span className="text-muted d-block">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      <span href="#" target="_blank" className="text-muted">{data.company}</span>
                    </span>
                    <span className="text-muted d-block">
                      <span className="fa fa-map-marker" aria-hidden="true"></span>{data.location}
                    </span>
                  </div>

                  <div className="mt-3">
                    <Link to={`/Career/${data.id}`} className="btn Careerbtn-primary">View Details</Link>
                  </div>
                </div>
              </div>
              </FadeOnScroll>
            </div>
          ))}
        </div>
      </div>
       
    </div>
  );
}

export default Career;
