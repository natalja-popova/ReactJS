import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

const index = ({ staff, setAllStaff }) => {
  return (
    <>
      <Header />
      <Main staff={staff} setAllStaff={setAllStaff} />
    </>
  );
};

export default index;
