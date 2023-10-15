import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Quick QR</h5>
          <p className="card-text">
            Developed by <strong>S K Sahil Mandal </strong> <br /> using{" "}
            <strong>React ⚛️</strong> © {"  " + year} <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
