import "./ContactFormStyles.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ToastContext from "../contexts/toastContext";
import { useContext } from "react";

type ContactFormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

const ContactForm = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("No Context found!!");
  }

  const { setShow } = toastContext;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormDataType>();

  const onSubmit = (data: ContactFormDataType) => {
    console.log("data:", data);
    if (data) {
      setShow(true);
    }
    reset();
  };

  const isRadioSelected: string = watch("queryType");

  return (
    <div className="contact-form-wrapper">
      <h4>Contact Us</h4>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <Form.Group controlId="first-name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              aria-invalid={!!errors.firstName}
              aria-describedby="firstNameError"
              {...register("firstName", { required: "First Name is required" })}
            />
            <p id="firstNameError" className="error-msg" role="alert">
              {errors.firstName?.message ? errors.firstName.message : ""}
            </p>
          </Form.Group>
          <Form.Group controlId="last-name">
            <Form.Label>Last Name</Form.Label>

            <Form.Control
              type="text"
              aria-invalid={!!errors.lastName}
              aria-describedby="lastNameError"
              {...register("lastName", { required: "Last name is required" })}
            />
            <p id="lastNameError" className="error-msg" role="alert">
              {errors.lastName?.message ? errors.lastName.message : ""}
            </p>
          </Form.Group>
        </div>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby="emailError"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          <p id="emailError" className="error-msg" role="alert">
            {errors.email?.message ? errors.email.message : ""}
          </p>
        </Form.Group>
        <Form.Group as={Row} controlId="query-type">
          <Form.Label>Query Type</Form.Label>
          <div className="radio-btn-group-wrapper">
            <div
              className={`radio-btn-wrapper ${
                isRadioSelected === "genral enquiry" ? "selected" : ""
              }`}
            >
              <Form.Check
                type="radio"
                aria-invalid={!!errors.queryType}
                aria-describedby="queryTypeError"
                value="genral enquiry"
                label="General Enuiry"
                {...register("queryType", {
                  required: "Please select a query type",
                })}
              />
            </div>
            <div
              className={`radio-btn-wrapper ${
                isRadioSelected === "support request" ? "selected" : ""
              }`}
            >
              <Form.Check
                type="radio"
                aria-invalid={!!errors.queryType}
                aria-describedby="queryTypeError"
                value="support request"
                label="Support Request"
                {...register("queryType", {
                  required: "Please select a query type",
                })}
              />
            </div>
          </div>
          <p id="queryTypeError" className="error-msg" role="alert">
            {errors.queryType?.message ? errors.queryType.message : ""}
          </p>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            aria-invalid={!!errors.message}
            aria-describedby="messageError"
            rows={3}
            {...register("message", { required: "This field is required" })}
          />
          <p id="messageError" className="error-msg" role="alert">
            {errors.message?.message ? errors.message.message : ""}
          </p>
        </Form.Group>
        <Form.Group controlId="consent">
          <Form.Check
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby="consentError"
            label="I consent to being contacted by the team"
            {...register("consent", {
              required:
                "To submit this form, please consent to being contacted",
            })}
          />
          <p id="consentError" className="error-msg" role="alert">
            {errors.consent?.message ? errors.consent.message : ""}
          </p>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button className="btn" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
