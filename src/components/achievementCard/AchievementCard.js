import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({cardInfo}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="dark-mode certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="dark-mode card-title">
          {cardInfo.title}
        </h5>
        <p className= "dark-mode card-subtitle">
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className="dark-mode certificate-tag"
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
