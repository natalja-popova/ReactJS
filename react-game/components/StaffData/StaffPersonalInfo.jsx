import style from "./staffPersonalInfo.module.css";

const PersonalInfo = ({ staffData, showAdditionalInfo }) => {
  return (
    <>
      <div className={style.personalInfoWrapper}>
        <div className={style.personalInfo}>
          <img src={`/images/${staffData.imgUrl}`} />
          <ul>
            <li>
              Name:<strong>{staffData.name}</strong>
            </li>
            <li>
              Role: <strong>{staffData.role}</strong>
            </li>

            <li>
              Income:<strong>${staffData.availableAmount}</strong>{" "}
            </li>
          </ul>
        </div>
        {showAdditionalInfo && <p>{staffData.description}</p>}
      </div>
    </>
  );
};

export default PersonalInfo;
