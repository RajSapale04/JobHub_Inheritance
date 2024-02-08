import CreateAccount from "./CreateAccount";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="working-wrapper">
      <div className="working">
        <h1 className="how-jobhub-works">How JobHub works</h1>
        <div className="create-account-parent">
          <CreateAccount
            userPlusDuotone1="/userplusduotone-1.svg"
            createAccount="Create account"
            aliquamFacilisisEgestasSa="Aliquam facilisis egestas sapien, nec tempor leo tristique at."
            arrows="/arrows.svg"
            propBackgroundColor1="#fff"
            propTop="4px"
          />
          <CreateAccount
            userPlusDuotone1="/cloudarrowupduotone-1.svg"
            createAccount="Upload CV/Resume"
            aliquamFacilisisEgestasSa="Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales"
            arrows="/arrows-1.svg"
            propBackgroundColor="#fff"
            propBackgroundColor1="#36384e"
            propTop="64px"
          />
          <div className="find-suitable-job">
            <div className="icon1">
              <img
                className="icon2"
                loading="eager"
                alt=""
                src="/751463-1@2x.png"
              />
            </div>
            <div className="find-suitable-job-parent">
              <div className="apply-job">Find suitable job</div>
              <div className="phasellus-quis-eleifend">
                Phasellus quis eleifend ex. Morbi nec fringilla nibh.
              </div>
            </div>
            <img className="arrows-icon1" alt="" src="/arrows-2.svg" />
          </div>
          <div className="apply-then">
            <button className="icon3">
              <img
                className="circle-wavy-check-duotone-1-icon"
                alt=""
                src="/circlewavycheckduotone-1.svg"
              />
            </button>
            <div className="find-suitable-job-parent">
              <div className="apply-job">Apply job</div>
              <div className="phasellus-quis-eleifend">
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

export default FrameComponent2;
