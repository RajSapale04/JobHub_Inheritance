import "./CopyRight.css";

const CopyRight = ({ twitter, youtube1, instagram1, twitter1 }) => {
  return (
    <footer className="copy-right1">
      <div className="jobpilot-job1">
        @ 2021 Jobpilot - Job Portal. All rights Rserved
      </div>
      <div className="youtube">
        <img className="twitter-icon" loading="eager" alt="" src={twitter} />
        <img
          className="youtube-1-icon1"
          loading="eager"
          alt=""
          src={youtube1}
        />
        <img
          className="youtube-1-icon1"
          loading="eager"
          alt=""
          src={instagram1}
        />
        <img
          className="youtube-1-icon1"
          loading="eager"
          alt=""
          src={twitter1}
        />
      </div>
    </footer>
  );
};

export default CopyRight;
