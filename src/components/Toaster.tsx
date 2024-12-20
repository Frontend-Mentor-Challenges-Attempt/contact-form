import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import ToastContext from "../contexts/toastContext";

const Toaster = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("No context found!!");
  }
  const [toast, setToast] = useState(false);
  const { show } = toastContext;

  useEffect(() => {
    if (show) {
      setToast(true);
    }
  }, [show]);

  return (
    <ToastContainer className="p-3" position="top-start" style={{ zIndex: 1 }}>
      <Toast
        show={!!toast}
        onClose={() => setToast(!toast)}
        delay={3000}
        autohide
        style={{ background: "#2b4246", color: "#fff" }}
      >
        <Toast.Body>
          <strong>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fff" }} />{" "}
            Message Sent !
          </strong>
          <br></br>
          Thanks for completing the form. We'll be in touch soon.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
