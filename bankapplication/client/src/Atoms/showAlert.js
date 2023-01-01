import { atom } from "recoil";

export const showAlertAtom = atom({
  key: "showAlertAtom",
  default: {
    showAlert: false,
    alertType: "",
    alertText: "",
  },
});
