import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./create-inquiry.css";
import "../components/BackgroundMain.css";

export const CreateInquiry = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    typeOfService: "",
    productType: "",
    brand: "",
    age: "",
    liftingMechanism: "",
    notes: "",
  });

  const [otherInputs, setOtherInputs] = useState({
    productTypeOther: "",
    brandOther: "",
  });

  const [file, setFile] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleOtherChange = (event) => {
    const { name, value } = event.target;
    setOtherInputs({ ...otherInputs, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the selected file
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(); // Create a FormData object to handle form data

    // Append inquiry fields to the form data
    for (const key in inquiry) {
      // Use the custom value if "Other" was selected
      if (key === "productType" && inquiry[key] === "Other") {
        formData.append(key, otherInputs.productTypeOther);
      } else if (key === "brand" && inquiry[key] === "Other") {
        formData.append(key, otherInputs.brandOther);
      } else {
        formData.append(key, inquiry[key]);
      }
    }

    // Append the file to the form data
    if (file) {
      formData.append("file", file); // Append the file under the name "file"
    }

    try {
      await axios.post(
        "https://aimonsite-02e4361db351.herokuapp.com/inquiries",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      setShowSuccessPopup(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleHomeRedirect = () => {
    setShowSuccessPopup(false);
    navigate("/");
  };

  return (
    <div className="full-screen-div">
      <div className="main-container poppins-semibold">
        <h2>Create Inquiry</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="input"
          />

          <label htmlFor="number">
            Number<span className="required">*</span>
          </label>
          <input
            type="text"
            id="number"
            name="number"
            onChange={handleChange}
            className="input"
          />

          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            className="input"
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            className="input"
          />

          <div className="dropdown-container">
            <div className="dropdown-wrapper">
              <label htmlFor="typeOfService">
                Type of Service<span className="required">*</span>
              </label>
              <select
                id="typeOfService"
                name="typeOfService"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="In Home">In Home</option>
                <option value="Drop Off">Drop Off</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="age">Age of Product</label>
              <select id="age" name="age" onChange={handleChange}>
                <option value=""></option>
                <option value="Less than 7 years">Less than 7 years</option>
                <option value="More than 7 years">More than 7 years</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="productType">
                Product Type<span className="required">*</span>
              </label>
              <select
                id="productType"
                name="productType"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Honeycomb/Cellular Shades">
                  Honeycomb/Cellular Shades
                </option>
                <option value="Silhouette Shades">Silhouette Shades</option>
                <option value="Wood Blinds">Wood Blinds</option>
                <option value="Roman Shades">Roman Shades</option>
                <option value="Metal Blinds">Metal Blinds</option>
                <option value="Other">Other</option>
              </select>
              {inquiry.productType === "Other" && (
                <input
                  type="text"
                  id="productTypeOther"
                  name="productTypeOther"
                  placeholder="Enter custom product type"
                  onChange={handleOtherChange}
                  className="input"
                />
              )}
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="brand">Brand</label>
              <select id="brand" name="brand" onChange={handleChange}>
                <option value=""></option>
                <option value="Hunter Douglas">Hunter Douglas</option>
                <option value="Levolor">Levolor</option>
                <option value="Bali">Bali</option>
                <option value="Graber">Graber</option>
                <option value="Other">Other</option>
              </select>
              {inquiry.brand === "Other" && (
                <input
                  type="text"
                  id="brandOther"
                  name="brandOther"
                  placeholder="Enter custom brand"
                  onChange={handleOtherChange}
                  className="input"
                />
              )}
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="liftingMechanism">Lifting Mechanism</label>
              <select
                id="liftingMechanism"
                name="liftingMechanism"
                onChange={handleChange}
                className="input"
              >
                <option value=""></option>
                <option value="Cordlock">Cordlock</option>
                <option value="EasyRise">EasyRise</option>
                <option value="LiteRise">LiteRise</option>
                <option value="UltraGlide">UltraGlide</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="file">Upload Image</label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="input"
              />
            </div>

            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              onChange={handleChange}
              className="input"
              placeholder="Enter any additional notes or requests here"
            />
          </div>
          <div className="button-inquiry-wrapper">
            <div className="inquiry-info">
              Inquiries and photos may also be sent via text message to
              650-862-5588*
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank you for filling out the form</h3>
            <h4>We will get back to you as soon as possible!</h4>
            <h5>For further inquiries, please contact aimonsite@gmail.com</h5>
            <button onClick={handleHomeRedirect}>Home</button>
          </div>
        </div>
      )}
    </div>
  );
};
