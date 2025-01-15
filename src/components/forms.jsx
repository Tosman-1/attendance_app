import Radio from "./radio";

const forms = ({ texts, errors, formData, setFormData, handleSubmit }) => {
  return (
    <div className="form-background">
      <div
        className="form"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      >
        <div className="inner-form">
          <div className="form-head">
            <h2>{texts.text}</h2>
            <p>{texts.sub_text}</p>
          </div>
          <div className="form-body">
            <Radio selectedUser={texts.currentuser} />
            {texts.labels.map((label, index) => (
              <div className="form-input" key={index}>
                <label>{label.label}</label>
                <input
                  type={label.label}
                  placeholder={label.placeholder}
                  value={formData[label.id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [label.id]: e.target.value })
                  }
                />
                {errors?.[label.id] && (
                  <div className="form-error">{errors[label.id]}</div>
                )}
              </div>
            ))}
            {texts.mid_text && <a className="frg-pass">Forgot password</a>}
          </div>
          <div className="form-bottom">
            <button type="submit" onClick={handleSubmit}>
              {texts.mid_text ? "Login" : "Sign Up"}
            </button>
            <a href="">{texts.bottom_text}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forms;
