import React from "react";

const Contact = () => {
  return (
    <div className="container bg-light text-muted py-5">
      <h3 className="text-center mb-3">Kontakt</h3>
      <div className="contact-box">
        <div className="d-flex align-items-center justify-content-center  py-3">
          <i className=" bg-transparent fas fa-envelope fa-2x text-warning"></i>
          <div className="p-4 align-self-end">m.widomski@tlen.pl</div>
        </div>

        <div className=" d-flex  align-items-center py-3 ">
          <i className=" bg-transparent fas fa-phone fa-2x text-warning"></i>
          <div className="p-4 ">+48 797 992 207</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
