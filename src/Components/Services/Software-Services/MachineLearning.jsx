import React from "react";
import FadeOnScroll from "../../Animated/motion";
import img1 from "../../Images/machinelearning.png";
import img2 from "../../Images/machinelearnig2.png";
import img3 from "../../Images/machinlearning3.jpg";
import img4 from "../../Images/machinelearning4.jpg";

function MachineLearning() {
  return (
    <div>
      <section class="py-3 py-md-5  py-xl-8">
        <div class="container mb-4">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-8">
              <FadeOnScroll>
                <h1 class="mb-2 text-secondary text-uppercase">
                  Machine Learning
                </h1>
                <h4 class="display-6 mb-4">
                  Leveraging data for automated insights, machine learning
                  catalyzes innovation and efficiency.
                </h4>
              </FadeOnScroll>
            </div>

            <div class="col-10 col-md-5 col-lg-4">
              <FadeOnScroll>
                <img src={img2} alt="" class="img-fluid" />
              </FadeOnScroll>
            </div>
          </div>
        </div>

        <div className="container-xxl mt-4   rounded py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                {/* Image */}
                <div
                  className="position-relative overflow-hidden h-100"
                  style={{ minHeight: "400px" }}
                >
                  <FadeOnScroll animation="right">
                    <img
                      className="img-fluid rounded-3 my-5"
                      src={img1}
                      alt="..."
                    />
                  </FadeOnScroll>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                {/* Text */}
                <FadeOnScroll animation="left">
                  <div className="h-100">
                    <p className="mb-2  lead">
                      <h3 style={{ color: "gray" }}>
                        Experience the Power of Machine Learning
                      </h3>
                      Machine learning, a cornerstone of modern technology,
                      empowers computers to analyze data patterns and make
                      predictions without explicit programming. Our advanced
                      algorithms, spanning supervised, unsupervised, and
                      reinforcement learning, drive innovation across industries
                      and markets. From personalized medicine to algorithmic
                      trading, machine learning revolutionizes decision-making
                      in healthcare, finance, and beyond. By leveraging neural
                      networks and deep learning techniques, we unlock insights
                      and automate tasks, enhancing efficiency and
                      competitiveness. With expertise in data preprocessing,
                      model selection, and evaluation, we tailor solutions to
                      optimize processes and drive growth in today's data-driven
                      landscape
                    </p>
                  </div>
                </FadeOnScroll>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-4">
          <div class="row gy-3 gy-md-4 gy-lg-0">
            <div class="col-12 col-lg-6">
              <FadeOnScroll animation="up">
                <div class="card bg-light p-3 m-0">
                  <div class="row gy-3 gy-md-0 align-items-md-center">
                    <div class="col-md-5">
                      <img
                        src={img4}
                        class="img-fluid rounded-start"
                        alt="Why Choose Us?"
                      />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">
                          What Drives the Importance of Machine Learning?
                        </h2>
                        <p class="card-text lead">
                          This is Cornerstone for development and business,
                          offering timeless benefits through its data-driven
                          insights and automation prowess. Its capacity to sift
                          through vast datasets allows for informed
                          decision-making, a quintessential trait for navigating
                          complex market landscapes. Moreover, its automation
                          capabilities relieve teams of mundane tasks, fostering
                          an environment ripe for innovation and strategic
                          endeavors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeOnScroll>
            </div>
            <div class="col-12 col-lg-6">
              <FadeOnScroll animation='up'>
              <div class="card bg-light p-3 m-0">
                <div class="row gy-3 gy-md-0 align-items-md-center">
                  <div class="col-md-5">
                    <img
                      src={img3}
                      class="img-fluid rounded-start"
                      alt="Visionary Team"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body p-0">
                      <h2 class="card-title h4 mb-3">
                        Transitioning to AI with Cloudstry Technologies
                      </h2>
                      <p class="card-text lead">
                        Cloudstry Technologies collaborates with machine
                        learning by integrating advanced AI algorithms into our
                        cloud-based infrastructure. Through this collaboration,
                        we harness the power of machine learning to analyze vast
                        datasets stored in the cloud, extracting valuable
                        insights and optimizing processes for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </FadeOnScroll>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MachineLearning;
