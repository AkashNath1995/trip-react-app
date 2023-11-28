import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trip-Go</h1>
          <p>Choose your favourite destination</p>
          <a href="/">
            <i className="fa-brands fa-facebook -square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram -square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="buttom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Twiter</a>
          <a href="/">Linkdin</a>
          <a href="/">Slack</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms and Conditions</a>
          <a href="/">Privecy Policy</a>
          <a href="/">Licence</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
