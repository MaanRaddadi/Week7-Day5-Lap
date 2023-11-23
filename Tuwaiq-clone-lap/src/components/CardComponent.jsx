import React from 'react'

function CardComponent(props) {
  const closed = false;
  return (
           
          <div className={`${props.type === "معسكر" ? "bootcamp-purple-border": "bootCamp-card"}${props.closed ? " closed-card" : ""}`} >
          <p className={`${props.type === "معسكر" ? "bootCamp-type-purple": "bootCamp-type"}${props.closed ? " closed-name" : ""}`}>{props.type}</p>
          <h2 className="bootCamp-name">{props.cardTitle}</h2>

          <div className="location-duration">
            <div className="location-wrap">
              <img id="location-icon" src="./src/assets/icons/location_icon.svg" />
              <p className="bootCamp-location">{props.city}</p>
            </div>

            <div className="bootCamp-duration-wrap">
              <img id="date-icon" src="./src/assets/icons/caleander_icon.svg" />
              <p className="bootCamp-duration">{props.duration}</p>
            </div>
          </div>

          <div className="date-details">
            <div>
              <img
                id="calendar-icon"
                src="./src/assets/icons/caleander2_icon.svg"
              />
              <p className="date">{props.date}</p>
            </div>
            <a className={`${props.type === "معسكر"? "details-btn-purple": "details-btn"}${props.closed ? " details-btn-closed":"" }`} href="#">{props.closed ? "مغلق":"التفاصيل"}</a>
          </div>
        </div>
    
  )
}

export default CardComponent