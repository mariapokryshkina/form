import React from "react";

const Notes = ({ firstname, lastname, phonenumber, role, message }) => {
  return (<div className="note">
      <p>
      {firstname} {lastname} - <em> {role} </em>| {phonenumber} |
       <strong> {message} </strong>
       </p>
       </div>
  );
};

export default Notes;