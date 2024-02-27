import React from "react";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div
        className="cc-contact-information"
        // style="background-image: url('images/staticmap.png')"
        style={{ backgroundimage: "url('images/staticmap.png')" }}
      >
        <div className="container">
          <div className="cc-contact">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-0" data-aos="zoom-in">
                  <div className="h4 text-center title">Contact Me</div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <form
                          action="https://formspree.io/your@email.com"
                          method="POST"
                        >
                          <div className="p pb-3">
                            <strong>Feel free to contact me </strong>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-user-circle"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-file-text"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Subject"
                                  placeholder="Subject"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-envelope"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="email"
                                  name="_replyto"
                                  placeholder="E-mail"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Your Message"
                                  required="required"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <button
                                id="about-call-action"
                                className="btn btn-primary"
                                type="submit"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>Address </strong>
                        </p>
                        <p className="pb-2">
                          140, City Center, New York, U.S.A
                        </p>
                        <p className="mb-0">
                          <strong>Phone</strong>
                        </p>
                        <p className="pb-2">+1718-111-0011</p>
                        <p className="mb-0">
                          <strong>Email</strong>
                        </p>
                        <p>anthony@company.com</p>
                      </div>
                    </div>
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

export default Contact;
