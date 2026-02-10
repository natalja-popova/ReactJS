import style from "./staffQualification.module.css";
import { Tooltip } from "react-tooltip";

const StaffQualification = ({ data }) => {
  return (
    <>
      <h3>Current Qualifications:</h3>
      <div className={style.qualificationsWrapper}>
        {data.qualifications.length > 0
          ? data.qualifications.map((q) => {
              return (
                <div key={q.qualifId}>
                  <img
                    className={style.qualificationIco}
                    src={q.qImgUrl}
                    data-tooltip-id={q.qualifId}
                    data-tooltip-html={`<div><h3>${q.qName}</h3></div>`}
                    alt={q.name}
                  />
                  <Tooltip id={q.qualifId} />
                </div>
              );
            })
          : "This character has not acquired any qualifications yet"}
      </div>
    </>
  );
};

export default StaffQualification;
