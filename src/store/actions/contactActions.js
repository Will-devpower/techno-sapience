import moment from "moment";
import { toast } from "react-toastify";

export const contactForm = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("contact")
      .doc()
      .set({
        ...data,
        createdAt: moment(new Date()).calendar(),
      })
      .then(() => {
        dispatch({
          type: "SEND_CONTACT_FORM",
          data,
        });
        toast("Mensaje Enviado", {
          type: "success",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        dispatch({
          type: "SEND_CONTACT_FORM_ERROR",
          err,
        });
      });    
  };
};
