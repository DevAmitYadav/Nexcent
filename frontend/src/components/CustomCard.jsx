import React from 'react';
import '../components/CustomCard.css';

const CustomCard = () => {
  return (
    <div className="customer-card">
      {/* Image on the Left */}
      <div className="customer-image">
        <img
          src="https://storage.googleapis.com/a1aa/image/bFx33smGDwsZPcuvaiW4FVa5vL-mS1F1ssC1vJ_CVnc.jpg"
          alt="Tesla logo"
        />
      </div>

      {/* Content on the Right */}
      <div className="customer-content">
        <p className="description">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, eu hendrerit elit.
        </p>
        <p className="name">Tim Smith</p>
        <p className="association">British Dragon Boat Racing Association</p>

        {/* Logos */}
        <div className="logos">
          <img className="company-logo" src="https://storage.googleapis.com/a1aa/image/MYg3TJLmoCWtQ9i3Q16LIM556TpuZtxvyVLOilLRtWo.jpg" alt="Company logo 1" />
          <img className="company-logo" src="https://storage.googleapis.com/a1aa/image/ii_amU-uh1U7mKELivhhtwrLd7KJVhyaDx1dNX2kA5M.jpg" alt="Company logo 2" />
          <img className="company-logo" src="https://storage.googleapis.com/a1aa/image/iqCFtRfjqEYcrYGfn2jOeJ4mD16oRbVmjUER0TY0CY0.jpg" alt="Company logo 3" />
          <img className="company-logo" src="https://storage.googleapis.com/a1aa/image/9Ptx9h5eZAmcPVKh5Y8hGv0_5UA_q_vH6DI41u18qUc.jpg" alt="Company logo 4" />
          <img className="company-logo" src="https://storage.googleapis.com/a1aa/image/2v2fDKLDPydkw20UAdB0ZsmGNssxzag4ouncH0tYqUk.jpg" alt="Company logo 5" />
        </div>

        {/* Link */}
        <a className="meet-customers" href="#">
          Meet all customers <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CustomCard;
