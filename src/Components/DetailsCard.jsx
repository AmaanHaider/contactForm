import React, { useState } from "react";
import ContactCard from "./ContactCard";

const DetailsCard = () => {
  const [details, setDetails] = useState({ name: "", email: "", number: "" });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateDetails = [
      ...data,
      {
        name: details.name,
        email: details.email,
        number: details.number,
      },
    ];
    setData(updateDetails);
  };

  return (
    <div className="conatiner" style={{ margin: "auto" }}>
      <form
       onSubmit={handleSubmit}
        style={{
          display: "flex",
          border: "1px solid red",
          margin: "auto",
          gap: "2%",
        }}
      >
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="ENTER YOUR MUMBER"
          onChange={handleChange}
        />

        <button
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          ADD DETAILS
        </button>
      </form>

      <div>
        {data.map((e) => (
          <ContactCard details={e} />
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
