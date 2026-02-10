import "@/styles/globals.css";
import { allStaff } from "../src/js/staff";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [myStaff, setAllStaff] = useState(allStaff);

  return <Component {...pageProps} staff={myStaff} setAllStaff={setAllStaff} />;
}
