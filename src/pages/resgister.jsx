import useFunction from "../components/customHook";
import Forms from "../components/forms";

const Resgister = () => {
  const texts = {
    text: "Create New Account",
    sub_text: "Welcome to SQI Attendance app",
    bottom_text: "Already have an account? Sign-in",
    path: "",
    labels: [
      { label: "First Name", placeholder: "John", id: "FN" },
      { label: "Last Name", placeholder: "Doe", id: "LN" },
      { label: "Email", placeholder: "Johndoe@gmail.com", id: "EMAIL" },
      { label: "Student ID", placeholder: "12345", id: "SID" },
      { label: "Department", placeholder: "Cyber security", id: "DEPT" },
      { label: "Password", placeholder: "************", id: "PASS" },
    ],
  };

  const { formData, setFormData, errors, handleSubmit } = useFunction(
    "http://localhost/sqi-attendance-app/backend/register.php",
    texts
  );

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

export default Resgister;
