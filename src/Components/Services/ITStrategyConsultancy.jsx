import React from 'react';
import FadeOnScroll from '../Animated/motion';
 
function ITStrategyConsultancy() {
  
  return (
    <div class="container-xxl py-5" >
        <div class="container">
            

            <header class=" py-5"   >
                <div class="container px-5 rounded" style={{boxShadow:"#c2c2c2 2px 2px 5px "}}>
                    <div class="row gx-5 align-items-center justify-content-center"  >
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class=" text-center text-xl-start" style={{marginTop:'3rem'}} >
                                <FadeOnScroll>
                                <h2 class="display-6 fw-bolder text-dark">It Strategy Consultancy</h2>
                                <p class=" fw-normal text-dark-50 mb-4">Our comprehensive IT strategy consulting services entail a thorough analysis of your current IT infrastructure, pinpointing gaps and areas for enhancement. Collaboratively, we align your business goals with a tailored strategy, while providing insights on emerging technologies to maintain your competitive edge. Our consultancy ensures a robust IT strategy, underpinning your organizational success.</p>
                                <p class=" fw-normal text-dark-50 mb-4">Furthermore, partnering with us optimizes your resource allocation. Developing an in-house IT strategy can be resource-intensive without a seasoned IT team. Leveraging our expertise expedites strategy development, identifying cost-effective solutions tailored to your needs. Ultimately, our services streamline operations, boost efficiency, and realize your business objectives. We also provide ongoing support and guidance, ensuring that your IT strategy remains aligned with your evolving business objectives and industry trends</p>
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
  );
}

export default ITStrategyConsultancy;
