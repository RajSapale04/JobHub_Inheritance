import { useState } from "react";
import "./LastNameInput1.css";

const LastNameInput1 = ({ firstName, whatIsYourFirstNPlacehold }) => {
  const [whatIsYourValue, setWhatIsYourValue] = useState("");
  return (
    <div className="last-name-input">
      <div className="password-input">
        <div className="first-name">{firstName}</div>
        <div className="email-i-d-mobile-no-inputs">
          <input
            className="what-is-your"
            placeholder={whatIsYourFirstNPlacehold}
            type="text"
            value={whatIsYourValue}
            onChange={(event) => setWhatIsYourValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default LastNameInput1;
