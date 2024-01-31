import classes from "../modules/footer.module.scss";
import logoImg from "../assets/images/logo.svg";
import locationImg from "../assets/images/icon-location.svg";
import phoneImg from "../assets/images/icon-phone.svg";
import emailImg from "../assets/images/icon-email.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["contact"]}>
        <h1>Get early access today</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse natus
          nihil quibusdam, repudiandae placeat numquam.
        </p>
        <div>
            <input type="text" placeholder="email@example.com" />
            <button>Get Started For Free</button>
        </div>
      </div>
      <div className={classes["row-align"]}>
        <div>
          <img src={logoImg} alt="" />
          <div
            className={classes["location"]}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={locationImg} alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              dolores veritatis iusto? Exercitationem quasi fugit assumenda enim
              officia, quibusdam dolorem.
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={phoneImg} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={emailImg} alt="" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
