import React from "react";
import photo from "../img/RVS frame.jpg";

const About = () => {
  return (
    <div className=" container bg-light text-muted py-5">
      <div className="row">
        <h3 className="text-center mb-4 text-dark">O Nas</h3>
        <div className="col-md-6">
          <img src={photo} alt="" className="img-fluid mb-3 " />
        </div>
        <div className="col-md-6 text-center">
          <p className="about_margin">
            Jesteśmy firmą zajmującą sie wykonywaniem prac spawalniczych oraz
            obróbką pospawanych elementów. Wiercimy, tniemy, nitujemy,
            szlifujemy i oczywiście spawamy TIGiem, MAGiem oraz MIGiem ( migiem
            również staramy się zamknąć zlecenia).
          </p>
          <div className="d-flex about_text">
            <div className="p-4 align-self-center">
              <i className="fas fa-check fa-2x text-warning"></i>
            </div>
            <div className="p-4 align-self-end ">
              Spawamy stal czarną oraz nierdzewną: profile, blachy itd.
            </div>
          </div>
          <div className="d-flex">
            <div className="p-4 align-self-center">
              <i className="fas fa-check fa-2x text-warning"></i>
            </div>
            <div className="p-4 align-self-end">
              Spawamy również konstrukcje z profili aluminiowych.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
