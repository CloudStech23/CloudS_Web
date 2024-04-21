import React from "react";
import FadeOnScroll from "../Animated/motion";

function ProductManagementQA() {
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
                      <h3 class="display-6 fw-bolder text-dark">
                        Product Management & QA
                      </h3>
                      <p class=" fw-normal text-dark-50 mb-4">At Cloudstry Technologies, our comprehensive product management and quality assurance (QA) services are tailored to meet your organization's unique needs. We begin by analyzing your current product landscape and QA processes, identifying areas for improvement and potential gaps. Through collaboration with your team, we ensure our strategies align seamlessly with your business goals.</p>
                      <p class=" fw-normal text-dark-50 mb-4">With a team of seasoned professionals, we offer expert guidance on emerging technologies and industry best practices, ensuring the innovation and competitiveness of your products. Partnering with us provides access to expertise, saving valuable time and resources. Our streamlined methodologies and cost-effective solutions empower you to optimize your product lifecycle, driving efficiency gains and curbing operational costs.</p>
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
                    title="productmanagement&QA"
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

export default ProductManagementQA;
