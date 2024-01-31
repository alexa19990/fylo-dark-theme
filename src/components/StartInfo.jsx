import classes from "../modules/startInfo.module.scss";
import imgIcon from "../assets/images/illustration-intro.png";

const StartInfo = () => {
  return (
    <div className={classes['startInfo-center']}>
      <div className={classes["startInfo-container"]}>
        <img src={imgIcon} alt="" />
        <h1>All our files in one secure location, accessible everywhere.</h1>
        <p>
          Fylo stores all your important files in one secure location. Access
          them whenever you need, share and collaborate with friends family, and
          co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default StartInfo;
