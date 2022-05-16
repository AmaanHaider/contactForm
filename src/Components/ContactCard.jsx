import React, { useState } from "react";

const ContactCard = (details) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div>
        <p>{details.name}</p>
        <p>{details.email}</p>
        {toggle && <p>contact Number:{details.number}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
