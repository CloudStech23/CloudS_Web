import React from "react";
import FadeOnScroll from "../Animated/motion";

function ITStrategyConsultancy() {
  return (
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
                      It Strategy Consultancy
                    </h2>
                    <p class=" fw-normal text-dark-50 mb-4">
                    Our comprehensive IT strategy consulting services begin with a meticulous analysis of your existing IT infrastructure, meticulously identifying gaps and opportunities for improvement. Together, we craft a bespoke strategy that aligns seamlessly with your business objectives, complemented by insights into emerging technologies to keep you ahead of the curve. Our consultancy guarantees a resilient IT strategy, serving as the foundation for your organizational triumph.

 
                    </p>
                    <p class=" fw-normal text-dark-50 mb-4">
                    Moreover, teaming up with us optimizes your resource utilization. Crafting an in-house IT strategy sans a seasoned team can drain your resources. By leveraging our expertise, we expedite strategy formulation, pinpointing cost-effective solutions tailored to your requirements. Ultimately, our services streamline operations, enhance efficiency, and actualize your business goals. Additionally, we offer ongoing support and guidance to ensure that your IT strategy evolves harmoniously with your business objectives and industry trends
                    </p>
                  </FadeOnScroll>
                </div>
              </div>
              <div class="col-xl-5 col-xxl-6  d-none d-xl-block text-center">
                <FadeOnScroll>
                  <iframe
                    style={{ height: "25rem", width: "37.5rem" }}
                    src="https://www.youtube.com/embed/FRXzVllKkkU"
                    frameborder="0"
                    allowfullscreen
                    className="img-fluid my-5 rounded"
                    title="Itstrategy&consultancy"
                  ></iframe>
                </FadeOnScroll>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default ITStrategyConsultancy;
