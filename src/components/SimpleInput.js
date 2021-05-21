import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEneteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name is Valid");
    }
  }, [enteredNameIsValid]);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== "") {
      setEneteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEneteredNameIsValid(false);
      return;
    }

    setEneteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be ampty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
