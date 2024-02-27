import React from "react";

const Skill = () => {
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">HTML</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      //style="width: 80%;"
                      style={{ width: "80%" }}
                    ></div>
                    <span className="progress-value">80%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      //style="width: 75%;"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="progress-value">75%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">JavaScript</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style="width: 60%;"
                      style={{ width: "60%" }}
                    ></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">SASS</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      //style="width: 60%;"
                      style={{ width: "60%" }}
                    ></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Bootstrap</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style="width: 75%;"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="progress-value">75%</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Photoshop</span>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style="width: 70%;"
                      style={{ width: "70%" }}
                    ></div>
                    <span className="progress-value">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
