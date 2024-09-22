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
  });

  const [otherInputs, setOtherInputs] = useState({
    productTypeOther: "",
    brandOther: "",
  });

  const [file, setFile] = useState(null);

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
      await axios.post("http://localhost:3001/inquiries", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      alert("Inquiry created");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="full-screen-div">
      <div className="main-container poppins-semibold">
        <h2>Create Inquiry</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="input"
          />

          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            onChange={handleChange}
            className="input"
          />

          <label htmlFor="email">Email</label>
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
              <label htmlFor="typeOfService">Type of Service</label>
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
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="More than 5 years">More than 5 years</option>
              </select>
            </div>

            <div className="dropdown-wrapper">
              <label htmlFor="productType">Product Type</label>
              <select
                id="productType"
                name="productType"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Blinds">Blinds</option>
                <option value="Drapes">Drapes</option>
                <option value="Shades">Shades</option>
                <option value="Shutters">Shutters</option>
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
    </div>
  );
};
