/* eslint-disable @next/next/no-img-element */
import React from "react";

const Help = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src="/assets/images/img-grid-1.jpg" alt="rh's Interior" />
              </div>
              <div className="grid grid-2">
                <img src="/assets/images/img-grid-2.jpg" alt="rh's Interior" />
              </div>
              <div className="grid grid-3">
                <img src="/assets/images/img-grid-3.jpg" alt="rh's Interior" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p>
              <a herf="#" className="btn">
                Explore
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
