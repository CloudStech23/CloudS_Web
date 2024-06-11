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
                    Our software services are at the forefront of innovation, integrating machine learning technologies across every stage of the development lifecycle. From initial analysis to ongoing maintenance, we infuse machine learning capabilities into our solutions, unlocking unprecedented insights and efficiencies for your organization.
                    </p>
                    <p class=" fw-normal text-dark-50 mb-4">
                    With our extensive expertise in machine learning, alongside Java, .NET, Python, Cloud, DevOps, Hadoop, R-system, and Ruby on Rails technologies, we cater to organizations of all sizes and industries. Whether you're a startup navigating the complexities of data-driven decision-making or an enterprise seeking to optimize operations with predictive analytics, our tailored solutions are designed to meet your unique needs.
                    </p>
                    <p class=" fw-normal text-dark-50 mb-4">
                    Experience the future of software development with our AI and  machine learning-powered solutions. Contact us today to embark on a journey of digital transformation and unlock the full potential of your organization's data."
                    </p>
                    </FadeOnScroll>
                  </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <FadeOnScroll>

                <iframe
                    style={{ height: "25rem", width: "37.5rem" }}
                    src="https://www.youtube.com/embed/wGd9el6cGTs"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid my-5 rounded"
                    title="softwareservice"
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
