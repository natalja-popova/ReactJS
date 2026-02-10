import style from "./main.module.css";
import { useRouter } from "next/router";

import PersonalInfo from "../StaffData/StaffPersonalInfo";
import StaffQualification from "../StaffData/StaffQualification";
import Spinner from "../spinner/Spinner";
const Main = ({ staff, setAllStaff }) => {
  const router = useRouter();

  return (
    <>
      {staff ? (
        <main className={style.cardsWrapper}>
          {staff.map((s) => {
            return (
              <div
                className={style.staffWrapper}
                key={s.id}
                onClick={() => router.push(`/staff/${s.id}`)}
              >
                <PersonalInfo staffData={s} showAdditionalInfo={false} />

                <div>
                  <StaffQualification data={s} />
                </div>
              </div>
            );
          })}
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Main;
