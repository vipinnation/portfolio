import React from "react";

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <div className="">
      <div className="container ">
        <h1>Service box</h1>
        <div className="row grid grid-cols-4">
          <div className="col-md-3 col-sm-6 ">
            <div className="service-box">
              <div className="service-icon yellow">
                <div className="front-content">
                  <i className="fa fa-trophy"></i>
                  <h3>design</h3>
                </div>
              </div>
              <div className="service-content">
                <h3>design</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <div className="service-box">
              <div className="service-icon orange">
                <div className="front-content">
                  <i className="fa fa-anchor"></i>
                  <h3>php</h3>
                </div>
              </div>
              <div className="service-content">
                <h3>php developer</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service-box ">
              <div className="service-icon red">
                <div className="front-content">
                  <i className="fa fa-trophy"></i>
                  <h3>Ui Developer</h3>
                </div>
              </div>
              <div className="service-content">
                <h3>Developer</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="service-box">
              <div className="service-icon grey">
                <div className="front-content">
                  <i className="fa fa-paper-plane-o"></i>
                  <h3>java script</h3>
                </div>
              </div>
              <div className="service-content">
                <h3>java script</h3>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
