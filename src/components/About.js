import React from "react";
import photo from "../img/max-larochelle-_RhL0DUidms-unsplash.jpg";

const About = () => {
  return (
    <div className=" container bg-light text-muted py-5">
      <div className="row">
        <div className="phone-icon mb-5">
          <span className="text-warning ">
            <i class=" w3-spin fa fa-phone mr-3"></i>
          </span>
          <span>797 992 207</span>
        </div>

        <div className="col-md-6">
          {/* Photo by <a href="https://unsplash.com/@maxlarochelle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Max LaRochelle</a> on <a href="https://unsplash.com/photos/person-welding-bar-_RhL0DUidms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}

          <img src={photo} alt="" className="img-fluid mb-3 " />
        </div>
        <div className="col-md-6 text-center d-flex flex-column justify-content-evenly mt-5">
          <h4>
            Naprawa i stawianie na nogi uszkodzonych bram, furtek itd. na
            terenie Mokotowa, Wilanowa i Ursynowa.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
