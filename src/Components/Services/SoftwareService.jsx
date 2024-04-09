import React from "react";
import FadeOnScroll from "../Animated/motion";

function SoftwareService() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <header class=" py-5">
            <div
              class="container px-5 rounded"
              style={{ boxShadow: "#c2c2c2 2px 2px 5px " }}
            >
              <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <div
                    class=" text-center text-xl-start"
                    style={{ marginTop: "3rem" }}
                  >
                    <FadeOnScroll>

                    <h2 class="display-6 fw-bolder text-dark">
                      Software Service
                    </h2>
                    <p class=" fw-normal text-dark-50 mb-4">
                      Our software services span the entire development
                      lifecycle, covering all roles and technology stacks. We
                      tailor solutions to meet unique organizational needs,
                      providing expertise in analysis, design, development,
                      testing, deployment, and maintenance.
                    </p>
                    <p class=" fw-normal text-dark-50 mb-4">
                      With extensive experience, we cater to organizations of
                      all sizes and industries, adept in Java, .NET, Python,
                      Cloud, DevOps, Hadoop, R-system, and Ruby on Rails
                      technologies. From startups to enterprises, we deliver
                      scalable solutions aligned with business goals.
                    </p>
                    <p class=" fw-normal text-dark-50 mb-4">
                      Collaborating with us streamlines your technology
                      endeavors, optimizing time and resources. We guide you
                      through efficient and cost-effective solutions, ensuring
                      timely project completion within budget
                    </p>
                    </FadeOnScroll>
                  </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <FadeOnScroll>

                <iframe
                    style={{ height: "25rem", width: "37.5rem" }}
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid my-5 rounded"
                  ></iframe>
                </FadeOnScroll>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default SoftwareService;
