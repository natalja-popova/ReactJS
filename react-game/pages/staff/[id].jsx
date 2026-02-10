import { useRouter } from "next/router";
import StaffDetails from "../../components/StaffData/StaffDetails";

const StaffPage = ({ staff, setAllStaff }) => {
  const router = useRouter();
  const { id } = router.query;

  return <StaffDetails id={id} allStaff={staff} setAllStaff={setAllStaff} />;
};

export default StaffPage;
