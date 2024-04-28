import React from 'react'
import img1 from '../../Images/Cloudservices.png'

function CloudServices() {
  return (
    <div>
        <header class=" py-5 position-relative">
                <img src="" alt="" />
                <div class="  position-absolute top-0 start-0 w-100 h-100"></div>
                <div class="container px-5 position-relative">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5   text-dark mb-2">Cloud Services</h1>
                                <p class="lead fw-normal text-dark-50 mb-4">
Discover the transformative capabilities of cloud services, revolutionizing businesses worldwide. Harnessing the power of remote servers and cutting-edge technology, cloud services offer unparalleled scalability, flexibility, and cost-effectiveness. From data storage and computing power to software development and deployment, cloud services empower organizations to streamline operations, drive innovation, and stay ahead in today's dynamic market landscape. Experience seamless access to resources, enhanced collaboration, and unmatched reliability with our comprehensive cloud solutions tailored to your unique business needs.</p>
                                 
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={img1} alt="..." /></div>
                    </div>
                </div>
            </header>

            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="text-center mb-5">
                      </div>
                    <div class="row gx-5 ">
                        <div class="col-xl-8">
                             <div class="accordion mb-5 mt-4" id="accordionExample">
                             <h3 class="fw-bolder">Explore the realm of Cloud services.</h3>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why Cloud Services ?</button></h3>
                                    <div class="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Cloud services offer scalability, flexibility, and cost-efficiency by eliminating the need for physical infrastructure. They facilitate seamless collaboration, enhance security, and provide robust disaster recovery capabilities. Leveraging cloud services accelerates innovation, improves time-to-market, and ensures business agility in a dynamic digital environment.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cloud Collboration Market/Industries</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Collaborating cloud services with industry needs involves tailoring cloud solutions to address specific challenges and opportunities within different sectors. By understanding industry requirements, cloud providers can offer specialized services and tools designed to enhance efficiency, security, and compliance.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Aligning Cloud Services with Cloudstry Technologies</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Unveiling the Power of Our Cloud Services: Your Path to Success </strong><br />
                                            Delve into our seamless integration of cutting-edge cloud solutions tailored to elevate your business. Experience personalized strategies meticulously crafted to address your unique needs and aspirations. With our expertise, harness the transformative potential of cloud technologies to optimize operations, foster collaboration, and effortlessly scale your endeavors. Witness the tangible benefits of enhanced efficiency, cost reduction, and accelerated growth as our cloud services pave the way for your triumph in today's dynamic marketplace.
                                        </div>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                         
                    </div>
                </div>
            </section>
            
             
            
             <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class=" mb-0">A better way to start with 
                        <br />Cloudstry Technologies</h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                                    <h2 class="h5">Innovation Enablement</h2>
                                    <p class="mb-0">Cloud services empower industries to innovate rapidly by providing access to cutting-edge technologies and development tools</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                    <h2 class="h5">Global Expansion</h2>
                                    <p class="mb-0">Cloud services facilitate global expansion by offering scalable infrastructure and services that can be easily deployed in multiple geographic regions</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Competitive Advantage</h2>
                                    <p class="mb-0">Cloud services confer a competitive advantage by enabling businesses to operate more efficiently, respond faster to market changes, and deliver superior customer experiences</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Risk Mitigation</h2>
                                    <p class="mb-0">Cloud services help mitigate risks associated with traditional IT infrastructure, such as hardware failures, security breaches, and data loss</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default CloudServices