import React from "react";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Hello! I am Anthony Barnett. Web Developer, Graphic Designer
                  and Photographer.
                </p>
                <p>
                  Creative CV is a HTML resume template for professionals. Built
                  with Bootstrap 4, Now UI Kit and FontAwesome, this modern and
                  responsive design template is perfect to showcase your
                  portfolio, skills and experience.{" "}
                  <a
                    href="https://templateflip.com/templates/creative-cv/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Age:</strong>
                  </div>
                  <div className="col-sm-8">24</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">anthony@company.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Phone:</strong>
                  </div>
                  <div className="col-sm-8">+1718-111-0011</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">
                    140, City Center, New York, U.S.A
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">English, German, French</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
