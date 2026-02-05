import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Spinner from "../components/spinner/Spinner";
import Header from "../components/header/Header";

import Main from "../components/main/Main";

const harrypotter = () => {
  const [allPersons, setAllPersons] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters",
    );
    setAllPersons(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {allPersons ? (
        <Main data={allPersons} setData={setAllPersons} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default harrypotter;
