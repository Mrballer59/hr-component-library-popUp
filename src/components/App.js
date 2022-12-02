import React from "react";
import { useState } from "react";
import { states, departement } from "../data/data";
import { PopUp } from "../lib/index";
import "./style.css";

function App() {
  //open modal
  const [isOpen, setIsOpen] = useState(false);
  // packaging datePicker
  const [startDate, setStartDate] = useState(new Date());

  const [userInfo, setUserInfo] = useState();
  //select list custom hook

  const [user, setUser] = useState({
    state: "",
    departement: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const onSave = () => {
    // setUserInfo(userInfo.concat(user));
    setIsOpen(true);
  };
  return (
    <section className="employee-Section">
      <h2>Create Employee </h2>
      <form action="#" id="form-employee">
        <label>First Name</label>
        <input name="firstName" type="firstName" onChangeInput={setUser} />

        <label>Last Name</label>
        <input name="lastName" type="lastName" onChangeInput={setUser} />

        <label>Date of Birth</label>
        <input
          name="dateOfBirth"
          type="date"
          id="dateOfBirth"
          onChangeInput={setUser}
        />

        <label>Start Date</label>
        <input
          name="startDate"
          type="date"
          id="startDate"
          onChangeInput={setUser}
        />
        <fieldset className="address">
          <legend>Adress</legend>

          <label>Street</label>
          <input name="street" type="street" onChangeInput={setUser} />

          <label>City</label>
          <input name="city" type="city" onChangeInput={setUser} />

          <label>State</label>
          {/* <select
            name="state"
            type="state"
            selector={states}
            itemSelector={true}
            onChangeState={setUser}
          /> */}
          <label>Zip Code</label>
          <input name="zipCode" type="zipCode" onChangeInput={setUser} />
        </fieldset>

        <label>Department</label>
        {/* <select
          name="departement"
          type="departement"
          selector={departement}
          itemSelector={false}
          onChangeDepart={setUser}
        /> */}
      </form>
      <button className="btn" onClick={onSave}>
        Save
      </button>
      {isOpen ? <PopUp setIsOpen={setIsOpen} /> : ""}
    </section>
  );
}

export default App;
