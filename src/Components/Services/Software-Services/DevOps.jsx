import React from "react";
import img1 from '../../Images/DevOps.png'
import img2 from '../../Images/devops2.jpg'

function DevOps() {
  return (
    <div>
      <div class="" style={{ backgroundColor: "#1e232e" }}>
        <div
          class="col-lg-8 col-xxl-6 rounded "
          style={{ paddingLeft: "4rem" }}
        ></div>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(30, 35, 46, 1)" offset="0%" />
            <stop stopColor="rgba(30, 35, 46, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,0L26.7,11.7C53.3,23,107,47,160,55C213.3,63,267,57,320,55C373.3,53,427,57,480,51.7C533.3,47,587,33,640,26.7C693.3,20,747,20,800,31.7C853.3,43,907,67,960,70C1013.3,73,1067,57,1120,56.7C1173.3,57,1227,73,1280,76.7C1333.3,80,1387,70,1440,61.7C1493.3,53,1547,47,1600,45C1653.3,43,1707,47,1760,43.3C1813.3,40,1867,30,1920,25C1973.3,20,2027,20,2080,26.7C2133.3,33,2187,47,2240,53.3C2293.3,60,2347,60,2400,51.7C2453.3,43,2507,27,2560,30C2613.3,33,2667,57,2720,63.3C2773.3,70,2827,60,2880,61.7C2933.3,63,2987,77,3040,76.7C3093.3,77,3147,63,3200,61.7C3253.3,60,3307,70,3360,68.3C3413.3,67,3467,53,3520,53.3C3573.3,53,3627,67,3680,68.3C3733.3,70,3787,60,3813,55L3840,50L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
        ></path>
      </svg>

      <section class="container-fluid bg-classic mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 my-auto">
              <div class="animated fadeInLeft p-4 rounded">
                <h1 class="elementor-heading-title elementor-size-default">
                  DevOps (Development Oprartions)
                </h1>
                <p>
                  DevOps combines development and operations teams to boost
                  software delivery efficiency and reliability. Emphasizing
                  collaboration and automation, it breaks down silos between
                  these groups, enabling faster releases. By automating testing,
                  deployment, and monitoring, DevOps streamlines workflows, cuts
                  errors, and speeds up time-to-market while maintaining
                  quality.
                </p>
                <p>
                Discover streamlined software delivery with our comprehensive DevOps solutions. Our integrated approach merges development and operations, promoting collaboration and automation to accelerate release cycles and ensure top-notch quality. Experience faster time-to-market, reduced errors, and enhanced customer satisfaction with our tailored DevOps services.
                </p>
              </div>
            </div>

            <div class="col-md-6 my-auto  d-none d-lg-block">
              <img
                src={img1}
                class="img-fluid rounded"
                alt="Image"
                style={{height:'30rem',width:'33rem'}}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-classic mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto d-none d-lg-block">
              <img
                src={img2}
                className="img-fluid rounded"
                alt="Image"
              />
            </div>

            <div className="col-md-6 my-auto">
              <div
                className="animated fadeInRight p-4 rounded"
                style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
              >
                <p>
                  <h1 className="h2">Empowering Industries Through DevOps</h1>
                  DevOps has become a game-changer for market industries, revolutionizing the way businesses develop and deliver software. By fostering collaboration between development and operations teams, DevOps streamlines processes, leading to faster release cycles and reduced time-to-market. This agility enables companies to respond swiftly to market demands and stay ahead of competitors. Moreover, the automation of tasks such as testing and deployment minimizes errors, enhancing product quality and reliability. As a result, businesses can deliver innovative solutions more efficiently, leading to increased customer satisfaction and market share. Overall, DevOps not only improves operational efficiency but also drives business growth and competitiveness in today's fast-paced industries.
                </p>

                <p>
                Unlock market competitiveness with   <strong>Cloudstry Technologies</strong> DevOps solutions, enabling faster releases and superior product quality through seamless integration and cutting-edge automation. Boost efficiency, innovation, and customer satisfaction in your industry with our tailored approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DevOps;
