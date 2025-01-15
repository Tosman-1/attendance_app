import { useState } from "react";

const Radio = ({ selectedUser }) => {
  const [currentUser, setCurrentUser] = useState(selectedUser);

  const handleChange = (e) => {
    setCurrentUser(e.target.value);
  };

  return (
    <div className="rad_inputs">
      <div>
        <input
          type="radio"
          name="currentUser"
          value="Admin"
          checked={currentUser === "Admin"}
          onChange={handleChange}
        />
        <label htmlFor="">Admin</label>
      </div>
      <div>
        <input
          type="radio"
          name="currentUser"
          value="Instructor"
          checked={currentUser === "Instructor"}
          onChange={handleChange}
        />
        <label htmlFor="">Instructor</label>
      </div>
      <div>
        <input
          type="radio"
          name="currentUser"
          value="Student"
          checked={currentUser === "Student"}
          onChange={handleChange}
        />
        <label htmlFor="">Student</label>
      </div>
    </div>
  );
};

export default Radio;
