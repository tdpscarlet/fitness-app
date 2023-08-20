import React from "react";
import dumbbell from "../../assets/images/Dumbbell.png";
import yoga from "../../assets/images/Yoga Skin Type 2.png";
import fitness from "../../assets/images/Plank.png";
import muscle from "../../assets/images/Rowing Machine.png";
import "./content.scss";

function Content() {
  return (
    <div className="content">
      <div className="offers">
        <div className="offersTitle">
          <span className="title1">Training program</span>
          <img className="offersImg" src={dumbbell} alt="" />
          <span className="title2">we offer to you</span>
        </div>
        <div className="offersItems">
          <div className="offersItem">
            <span className="itemTitle">Yoga</span>
            <img src={yoga} className="itemImg" />
            <span className="itemDesc">
              enjoy yoga for all level body elastic, body weight, and many more
            </span>
          </div>
          <div className="breakline"></div>
          <div className="offersItem">
            <span className="itemTitle">Fitness</span>
            <img src={fitness} className="itemImg" />
            <span className="itemDesc">
              regular strength training improve the health of your bones and
              muscles
            </span>
          </div>
          <div className="breakline"></div>
          <div className="offersItem">
            <span className="itemTitle">Muscle</span>
            <img src={muscle} className="itemImg" />
            <span className="itemDesc">
              enjoy all muscles exercise in every level, make your abs dream
              come true
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
