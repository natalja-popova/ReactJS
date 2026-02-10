import style from "./staffDetails.module.css";
import Header from "../header/Header";
import Qualification from "../qualification/Qualification";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../spinner/Spinner";
import Mission from "../mission/Mission";
import StaffPersonalInfo from "./StaffPersonalInfo";
import StaffQualification from "./StaffQualification";

const StaffDetails = ({ id, allStaff, setAllStaff }) => {
  const router = useRouter();

  const [selectedStaff, setSelectedStaff] = useState(null);

  const staff = allStaff.find((s) => String(s.id) === String(id));

  useEffect(() => {
    if (staff) {
      setSelectedStaff(staff);
    }
  }, [staff]);

  //--prepare to update All staff
  const prepareAllStafState = (staff) =>
    allStaff.map((s) => (String(s.id) === String(staff.id) ? staff : s));
  //end prepare to update All staff function

  //-------------------- Purchase Qualification
  const purchaseQualification = (qualifId, qPrice, qImgUrl, qName) => {
    if (selectedStaff.availableAmount < qPrice)
      return alert(
        "Not enough money. You can complete mission to earn more money",
      );

    const ok = window.confirm(
      `Are you sure you want to buy ${qName} for $${qPrice}?`,
    );
    if (!ok) return;

    const updatedStaff = {
      ...selectedStaff,
      availableAmount: selectedStaff.availableAmount - qPrice,
      qualifications: [
        ...selectedStaff.qualifications,
        {
          qualifId,
          qImgUrl,
          qName,
        },
      ],
    };
    console.log(JSON.stringify(updatedStaff));
    setSelectedStaff(updatedStaff);

    //----update all Staff
    setAllStaff(prepareAllStafState(updatedStaff));
    //---end update all staff
  };
  //-------------End purchase qualification

  //---start mission completion
  const completeMission = (reward, name) => {
    const ok = window.confirm(
      `Are you sure you want to complete the "${name}" mission and claim your $${reward} reward?`,
    );
    if (!ok) return;

    const updatedStaffAmount = {
      ...selectedStaff,
      availableAmount: selectedStaff.availableAmount + reward,
    };
    setSelectedStaff(updatedStaffAmount);

    //----update all Staff
    setAllStaff(prepareAllStafState(updatedStaffAmount));
    //---end update all staff
  };
  //--end mission completion
  if (!staff)
    return (
      <>
        <Header />
        <section className={style.errorMsg}>
          <h2>Staff member not found.</h2>
          <p>Please check the link or return to Home page.</p>
          <button className="btn" onClick={() => router.push("/")}>
            Back
          </button>
        </section>
      </>
    );

  return (
    <>
      <Header />
      {selectedStaff ? (
        <section className={style.sectionWrapper}>
          <div className={style.staffWrapper}>
            <StaffPersonalInfo
              staffData={selectedStaff}
              showAdditionalInfo={true}
            />

            <div>
              <StaffQualification data={selectedStaff} />
            </div>
          </div>

          <Qualification
            userQualification={selectedStaff.qualifications}
            userId={selectedStaff.id}
            onBuy={purchaseQualification}
            availableAmount={selectedStaff.availableAmount}
          />

          <Mission onCompleteMission={completeMission} />
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StaffDetails;
