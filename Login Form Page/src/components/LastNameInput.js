import { useState, useMemo } from "react";
import "./LastNameInput.css";

const LastNameInput = ({
  emailID,
  whatIsYouEmailIDPlacehold,
  emailIDHeight,
  emailIDDisplay,
}) => {
  const [whatIsYouValue, setWhatIsYouValue] = useState("");
  const emailIDStyle = useMemo(() => {
    return {
      height: emailIDHeight,
      display: emailIDDisplay,
    };
  }, [emailIDHeight, emailIDDisplay]);

  return (
    <div className="last-name-input1">
      <div className="email-id" style={emailIDStyle}>
        {emailID}
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder={whatIsYouEmailIDPlacehold}
          type="text"
          value={whatIsYouValue}
          onChange={(event) => setWhatIsYouValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default LastNameInput;
