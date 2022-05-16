import React from "react";

const userDetails =[

    {
        id:1,
        Name:"Annette Murphy",
        email:"randomemail1@gmail.com"
    },
    {
        id:2,
        Name:"Theresa Watson",
        email:"randomemail2@gmail.com"
    },
    {
        id:3,
        Name:"Cody Howard",
        email:"randomemail3@gmail.com"
    },
    {
        id:4,
        Name:"Max Lane",
        email:"randomemail4@gmail.com"
    },
    {
        id:5,
        Name:"Marvin FIsher",
        email:"randomemail5@gmail.com"
    },
    {
        id:6,
        Name:"Brooklyn Mccoy",
        email:"randomemail6@gmail.com"
    },
]

const DetailsCard = () => {
  return (
    <div className="maincont" style={{
        width: "400px",
        margin: "auto",
        border: "1px solid red"
    }}>
      {userDetails.map((e) => (
        <div className="contactCard" key={e.id} style={{

            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"



        }}>
            <h1>{e.Name}</h1>
            <h5>{e.email}</h5>
        </div>
      ))
      }
    </div>
  );
};

export default DetailsCard;
