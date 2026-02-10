import React, { useState, useEffect } from "react";
import { availableQualifications } from "../../src/js/qualifications.js";
import { Tooltip } from "react-tooltip";
import style from "./qualification.module.css";

const Qualification = ({ userQualification, onBuy, availableAmount }) => {
  const [errMsg, setErrMsg] = useState("");
  const cannotAffordAny = availableQualifications
    .filter((q) => !userQualification.some((uq) => uq.qualifId === q.qualifId))
    .every((q) => availableAmount < q.price);

  useEffect(() => {
    if (cannotAffordAny) {
      setErrMsg("Please complete missions to earn more money");
    } else {
      setErrMsg("");
    }
  }, [cannotAffordAny]);
  return (
    <div
      className={`${style.contentWrapper} ${!cannotAffordAny ? style.canPurchase : style.cantPurchase}`}
    >
      <h3>Upgrades You Can Purchase</h3>
      <div className={style.qualificationsWrapper}>
        {availableQualifications.map((q) => {
          const hasQualification = userQualification.some(
            (uq) => uq.qualifId === q.qualifId,
          );

          if (hasQualification) return null;

          return (
            <div key={q.id}>
              <div className={style.qualification}>
                <img
                  onClick={() => onBuy(q.qualifId, q.price, q.imgUrl, q.name)}
                  data-tooltip-id={q.id}
                  data-tooltip-html={`<div><h3>${q.name}</h3><p style="padding:5px 0">${q.description}</p><p><strong>Price: $${q.price}</strong></p></div>`}
                  src={q.imgUrl}
                  alt={q.name}
                  width={40}
                />
                <Tooltip id={q.id} />
              </div>
            </div>
          );
        })}
      </div>
      {errMsg}
    </div>
  );
};
export default Qualification;
