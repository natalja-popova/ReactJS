import React, { useEffect, useState } from "react";
import { missions } from "../../src/js/missions.js";
import style from "./mission.module.css";

const Mission = ({ onCompleteMission }) => {
  const [allMissions, setAllMissions] = useState([]);
  const [activeMissions, setMission] = useState([]);
  const getUncompletedMissions = (missionList) => {
    return missionList.filter((m) => !m.isCompleted).slice(0, 5);
  };

  useEffect(() => {
    const UncompletedMissions = getUncompletedMissions(missions);
    setMission(UncompletedMissions);
  }, []);

  useEffect(() => {
    setAllMissions(missions);
  }, []);

  const completeMission = (id) => {
    const updatedAll = allMissions.map((m) =>
      m.id === id ? { ...m, isCompleted: true } : m,
    );

    setAllMissions(updatedAll);

    const filteredMissions = getUncompletedMissions(updatedAll);

    setMission(filteredMissions);

    const mission = allMissions.find((m) => m.id === id);
    onCompleteMission(mission.price, mission.mission);
  };

  return (
    <div className={style.missions}>
      <h3>Available Missions</h3>
      <div className={style.missionWrapper}>
        {activeMissions.length > 0
          ? activeMissions.map((m) => {
              return (
                <div key={m.id} className={style.mission}>
                  <p>{m.mission}</p>
                  <p>
                    <span>Reward:</span> $ {m.price}
                  </p>
                  <button className="btn" onClick={() => completeMission(m.id)}>
                    Complete Mission
                  </button>
                </div>
              );
            })
          : "All Missions are Completed"}
      </div>
    </div>
  );
};

export default Mission;
