import { useMemo } from "react";
import "./CreateAccount.css";

const CreateAccount = ({
  userPlusDuotone1,
  createAccount,
  aliquamFacilisisEgestasSa,
  arrows,
  propBackgroundColor,
  propBackgroundColor1,
  propOverflow,
  propTop,
}) => {
  const createAccountStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const userPlusDuotone1IconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const arrowsIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="create-account" style={createAccountStyle}>
      <button className="icon" style={iconStyle}>
        <img
          className="user-plus-duotone-1-icon"
          alt=""
          src={userPlusDuotone1}
          style={userPlusDuotone1IconStyle}
        />
      </button>
      <div className="quick-link-employers">
        <div className="create-account1">{createAccount}</div>
        <div className="aliquam-facilisis-egestas">
          {aliquamFacilisisEgestasSa}
        </div>
      </div>
      <img
        className="arrows-icon"
        loading="eager"
        alt=""
        src={arrows}
        style={arrowsIconStyle}
      />
    </div>
  );
};

export default CreateAccount;
