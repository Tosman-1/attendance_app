import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// import axios from "axios";
import Api from "../api";

const useFunction = (url, texts) => {
  // Initialize form data dynamically based on labels
  const [formData, setFormData] = useState(
    texts.labels.reduce((acc, label) => ({ ...acc, [label.id]: "" }), {})
  );

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Build Yup validation schema dynamically
  const validationSchema = Yup.object(
    texts.labels.reduce((acc, label) => {
      if (label.id === "EMAIL") {
        // Add email validation
        acc[label.id] = Yup.string()
          .email("Invalid email address")
          .required(`${label.label} is required`);
      } else if (label.id === "PASS") {
        // Add password validation
        acc[label.id] = Yup.string()
          .min(8, "Password must be at least 8 characters long")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
          )
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          )
          .matches(/\d/, "Password must contain at least one digit")
          .required(`${label.label} is required`);
      } else {
        // Default required validation for other fields
        acc[label.id] = Yup.string().required(`${label.label} is required`);
      }
      return acc;
    }, {})
  );

  const submitForm = () => {
    Api.post(url, formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.message) {
          alert(response.data.message);

          if (response.data.status === "Success") {
            if (texts.type === "login") {
              // Save token in sessionStorage
              sessionStorage.setItem("accessToken", response.data.token);

              // Redirect to home page after successful login or registration
              navigate("/home");
            }
          }
          // Reset form on successful submission
          setFormData(
            texts.labels.reduce(
              (acc, label) => ({ ...acc, [label.id]: "" }),
              {}
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something is wrong.");
      });
  };

  const validatingForm = () => {
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // console.log("Form submitted");
        submitForm();

        setErrors({}); // Clear errors on successful validation
      })
      .catch((validationError) => {
        const formErrors = {};
        validationError.inner.forEach((err) => {
          formErrors[err.path] = err.message;
        });
        setErrors(formErrors);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validatingForm();
  };

  return { formData, setFormData, errors, handleSubmit };
};

export default useFunction;
