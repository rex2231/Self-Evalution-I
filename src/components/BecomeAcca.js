import { FaRegistered } from "react-icons/fa6";
import { PiExamLight } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import ApplyToAcca from "./ApplyToAcca";

const BecomeAcca = () =>  (
    <div className="becomeAcca-page-container">
      <div className="becomeAcca-details-container">
        <h1>Become an ACCA in 18 Months</h1>
        <p>
          The ACCA program equips you with the knowledge and skills to thrive in
          today's dynamic financial landscape. At our institute, we're dedicated
          to guiding you on your journey to becoming a highly sought-after ACCA
          professional.
        </p>
        <div className="page-highlights-container">
          <div className="highlight-container">
            <div className="highlight-sub-container">
              <FaRegistered className="highlight-icon" />
              <p className="highlight">Registrations</p>
            </div>
            <p className="highlight-num">320,133</p>
          </div>
          <div className="highlight-container">
            <div className="highlight-sub-container">
              <PiExamLight className="highlight-icon" />
              <p className="highlight">Courses Funded</p>
            </div>
            <p className="highlight-num">85,311</p>
          </div>
          <div className="highlight-container">
            <div className="highlight-sub-container">
              <BiSolidVideos className="highlight-icon" />
              <p className="highlight">Videos Available</p>
            </div>
            <p className="highlight-num">2,121,413,122</p>
          </div>
          <div className="highlight-container">
            <div className="highlight-sub-container">
              <BsFillPeopleFill className="highlight-icon" />
              <p className="highlight">Faculty</p>
            </div>
            <p className="highlight-num">8 Experts</p>
          </div>
        </div>
        <div className="becomeAcca-buttons-container">
          <button className="download-brochure-button">
            Download Brochure
          </button>
          <button className="enroll-now-button">
            Enroll Now <br /> (Limited Seats Available)
          </button>
        </div>
      </div>
      <div className="apply-container">
        <ApplyToAcca />
      </div>
    </div>
  );

export default BecomeAcca;
