// HomeInfo.js
import "./HomeInfo.css";

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <div className="borderlineone"></div>{" "}
      <div className="content-container">
        <div className="text-container">
          <div className="text-header-container">
            <div className="textone">Who we are</div>
            <div className="texttwo">Certified, Professional, Quality</div>
          </div>
          <div className="textthree">Certified</div>
          <div className="text-image-container">
            <img
              src="/shield-trust.png"
              alt="Shield Trust"
              className="info-images"
            />
            <div className="textfour">
              AIM Blind and Drapery is an authorized Hunter Douglas local repair
              center serving the Bay Area Peninsula.
            </div>
          </div>
          <div className="textthree">Professional</div>
          <div className="text-image-container">
            <div className="textfour">
              We have been in the Hunter Douglas repair industry since 2009,
              servicing over thousands of clients.
            </div>
            <img src="/shirt.png" alt="Shirt" className="info-images" />
          </div>
          <div className="textthree">Quality</div>
          <div className="text-image-container">
            <img src="/sparkles.png" alt="Sparkles" className="info-images" />
            <div className="textfour">
              Specializing in professional window blind repairs, we offer a full
              range of services to seamlessly restore the beauty and
              functionality of your blinds.
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src="/4_vignette.jpg"
            alt="Vignette"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="borderlinetwo"></div>{" "}
    </div>
  );
};

export default HomeInfo;
