import classes from "../modules/productive.module.scss";
import imgIcon from "../assets/images/illustration-stay-productive.png";

const Productive = () => {
  return (
    <div className={classes["productive-container"]}>
      <img src={imgIcon} alt="" />
      <div className={classes["productive-textSide"]}>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum
          dolorum vel unde! Exercitationem laborum animi voluptas dolor!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eum
          dolorum vel unde! Exercitationem laborum animi voluptas dolor!
        </p>
        <p className={classes["underline"]}>See how Fylo works</p>
      </div>
    </div>
  );
};

export default Productive;
