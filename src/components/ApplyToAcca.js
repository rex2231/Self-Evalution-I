import React, { useState } from "react";

const ApplyToAcca = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault(); 
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="form-container">
        <h2>Aspiring to be an ACCA? Get in touch with us!</h2>
        <form>
          <input
            type="text"
            placeholder="Phone Number*"
            required
            className="get-in-touch-input"
          />
          <input
            type="email"
            placeholder="Email ID"
            required
            className="get-in-touch-input"
          />
          <select required className="get-in-touch-input">
            <option value="" disabled selected>
              Current Qualification
            </option>
            <option value="qualification1">Qualification 1</option>
            <option value="qualification2">Qualification 2</option>
            <option value="qualification3">Qualification 3</option>
          </select>
          <select required className="get-in-touch-input">
            <option value="" disabled selected>
              Interested In
            </option>
            <option value="interest1">Interest 1</option>
            <option value="interest2">Interest 2</option>
            <option value="interest3">Interest 3</option>
          </select>
          <button
            type="submit"
            onClick={openModal}
            className="request-call-back-button"
          >
            Request Call Back
          </button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Success! We will contact you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyToAcca;
