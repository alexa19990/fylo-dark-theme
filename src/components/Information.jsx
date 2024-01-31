import classes from "../modules/information.module.scss";
import img1 from "../assets/images/icon-access-anywhere.svg";
import img2 from "../assets/images/icon-security.svg";
import img3 from "../assets/images/icon-collaboration.svg";
import img4 from "../assets/images/icon-any-file.svg";

const Information = () => {
  const dataArr = [
    {
      image: img1,
      title: "Access your files, anywhere",
      text: "The Ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere",
    },
    {
      image: img2,
      title: "Security you can trust",
      text: "The Ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere",
    },
    {
      image: img3,
      title: "Real-time collaboration",
      text: "The Ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere",
    },
    {
      image: img4,
      title: "Store any type of file",
      text: "The Ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere",
    },
  ];

  const topRowData = dataArr.slice(0, 2);
  const bottomRowData = dataArr.slice(2, 4);

  return (
    <div className={classes['info-center']}>
      <div className={classes["info-container"]}>
        <div className={classes["row-div"]}>
          {topRowData.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className={classes["row-div"]}>
          {bottomRowData.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Information;
