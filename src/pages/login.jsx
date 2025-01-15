import useFunction from "../components/customHook";
import Forms from "../components/forms";

const Login = () => {
  const texts = {
    text: "Login",
    sub_text: "Welcome to SQI Attendance app",
    mid_text: true,
    bottom_text: "Don't have an account? Sign-up",
    currentuser: "Student",
    path: "",
    labels: [
      { label: "Student ID", placeholder: "12345", id: "SID" },
      { label: "Password", placeholder: "************", id: "PASSW" },
    ],
  };

  const { formData, setFormData, errors, handleSubmit } = useFunction(
    "http://localhost/sqi-attendance-app/backend/login.php",
    texts
  );

  // const [formData, setFormData] = useState({
  //   SID: "",
  //   PASS: "",
  // });

  // const [errors, setError] = useState();

  // const validationSchema = Yup.object({
  //   SID: Yup.string().required("Student ID is required"),
  //   PASS: Yup.string().required("Password is required"),
  // });

  // const { SID, PASS } = formData;

  // const validatingForm = () => {
  //   validationSchema
  //     .validate(formData, { abortEarly: false })
  //     .then(() => {
  //       // validatingForm();
  //       console.log("form submitted");
  //     })
  //     .catch((error) => {
  //       const formErrors = {};

  //       error.inner.forEach((err) => {
  //         formErrors[err.path] = err.message;
  //         setError(formErrors);

  //         // console.log(formErrors);
  //       });
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Call API to validate credentials
  //   console.log(formData);

  //   validatingForm();
  //   return;

  //   axios
  //     .post("http://localhost/sqi-attendance-app/backend/register.php", {
  //       SID,
  //       PASS,
  //     })
  //     .then((response) => {
  //       console.log(response);

  //       if (response.data.message) {
  //         console.log(response.data.message);
  //         setFormData({ SID: "", PASS: "" });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error adding user:", error);
  //       alert("Failed to add user.");
  //     });
  // };

  return (
    <div>
      <Forms
        texts={texts}
        errors={errors}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
