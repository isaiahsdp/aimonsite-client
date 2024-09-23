import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="image-container-services">
        <img
          src="/shade-services.png"
          alt="shade"
          style={{ maxWidth: "80vh", height: "50vh" }}
        />
      </div>
      <div className="about-section">
        <div className="about-content">
          <div className="title-about">About</div>
          <div className="poppins-regular-about">
            AIM Blind and Drapery is a family-run business with over 21 years of
            experience serving the Bay Area Peninsula. As a proud division of
            Rebarts Interiors Hunter Douglas Gallery, we specialize in
            professional window blind repairs, dedicated to restoring beauty and
            functionality with fast turnaround times. Since 2009, we have been
            an authorized Hunter Douglas repair center, trusted by thousands of
            clients for our exceptional service and craftsmanship.
          </div>
        </div>
      </div>

      <div className="separator-line"></div>

      <div className="services-section">
        <div className="service-containers">
          <div className="title-services">Services</div>
          <div className="service-box">
            <div className="repair-info">
              <span className="poppins-regular-services-title">
                Repairable Shades
              </span>
              <ul className="poppins-regular-services">
                <li>Honeycombs, Duettes, Applause, Pleated/Cellular</li>
                <li>Silhouettes</li>
                <li>Woodblinds</li>
                <li>Metals</li>
                <li>Vignettes</li>
                <li>Luminettes</li>
                <li>
                  Roller shades{" "}
                  <span className="poppins-regular-services-light">
                    (no design studio)
                  </span>
                </li>
              </ul>

              <p className="poppins-regular-services-bold">
                For Non-Hunter Douglas products please contact us.
              </p>
              <p className="poppins-regular-services">
                We offer both drop-off and in-home services!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
