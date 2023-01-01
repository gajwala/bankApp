import { useRecoilValue } from "recoil";
import { showAlertAtom } from "../Atoms/showAlert";

const Alert = () => {
  const alertData = useRecoilValue(showAlertAtom);
  return (
    <div className={`alert alert-${alertData.alertType}`}>
      {alertData.alertText}
    </div>
  );
};

export default Alert;
