import React from "react";

const Form = ({submit, change}) => {
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="phone">Phonenumber</label>
        <input
          type="phone"
          name="phonenumber"
          id="phonenumber"
          required
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={change}>
          <option value="teacher" selected>
            Teacher
          </option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          onChange={change}
        ></textarea>
      </div>
      <input className="button"type="submit" value="Send" />
    </form>
  );
};

export default Form;