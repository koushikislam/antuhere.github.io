import React, {createRef} from "react";
import "./ExperienceCard.css";
// import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo}) {
 
  const imgRef = createRef();



  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className="subTitle dark-mode-text"
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card-dark">
      <div  className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          // onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className="experience-text-role dark-mode-text"
        >
          {cardInfo.role}
        </h5>
        <h5
          className="experience-text-date dark-mode-text"
        >
          {cardInfo.date}
        </h5>
        <p
          className="subTitle experience-text-desc dark-mode-text"
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
