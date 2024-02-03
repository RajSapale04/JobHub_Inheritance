import CreateAccount from "./CreateAccount";
import "./JendoLogoFrame.css";

const JendoLogoFrame = () => {
  return (
    <section className="jendo-logo-frame">
      <div className="working">
        <h1 className="how-jobhub-works">How JobHub works</h1>
        <div className="create-account-parent">
          <CreateAccount
            userPlusDuotone1="/userplusduotone-1.svg"
            createAccount="Create account"
            aliquamFacilisisEgestasSa="Aliquam facilisis egestas sapien, nec tempor leo tristique at."
            arrows="/arrows.svg"
            propBackgroundColor1="#fff"
            propOverflow="hidden"
            propTop="4px"
          />
          <CreateAccount
            userPlusDuotone1="/cloudarrowupduotone-1.svg"
            createAccount="Upload CV/Resume"
            aliquamFacilisisEgestasSa="Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales"
            arrows="/arrows-1.svg"
            propBackgroundColor="#fff"
            propBackgroundColor1="#36384e"
            propOverflow="hidden"
            propTop="64px"
          />
          <CreateAccount
            userPlusDuotone1="/751463-1@2x.png"
            createAccount="Find suitable job"
            aliquamFacilisisEgestasSa="Phasellus quis eleifend ex. Morbi nec fringilla nibh."
            arrows="/arrows-2.svg"
            propBackgroundColor="unset"
            propBackgroundColor1="#fff"
            propOverflow="unset"
            propTop="4px"
          />
          <div className="apply-then">
            <button className="icon1">
              <img
                className="circle-wavy-check-duotone-1-icon"
                alt=""
                src="/circlewavycheckduotone-1.svg"
              />
            </button>
            <div className="apply-job-parent">
              <div className="apply-job">Apply job</div>
              <div className="curabitur-sit-amet">
                Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
                purus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JendoLogoFrame;
