import "./Candidate.css";

const Candidate = ({
  candidate,
  fiarrowRight,
  footerLink,
  fiarrowRight1,
  footerLink1,
  fiarrowRight2,
  footerLink2,
  fiarrowRight3,
  footerLink3,
}) => {
  return (
    <div className="candidate">
      <div className="candidate1">{candidate}</div>
      <div className="link">
        <div className="footer-link">
          <div className="footer-link1">{footerLink}</div>
        </div>
        <div className="footer-link">
          <div className="footer-link3">{footerLink1}</div>
        </div>
        <div className="footer-link">
          <div className="footer-link5">{footerLink2}</div>
        </div>
        <div className="footer-link">
          <div className="footer-link7">{footerLink3}</div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
