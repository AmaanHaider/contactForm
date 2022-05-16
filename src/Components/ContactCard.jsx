import React, { useState } from 'react'

const ContactCard = (details) => {
  const[toggle,setToggle]=useState(false);
    return (
       <div  onClick={()=>{setToggle(!toggle)}}
       
       style={{
           boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"
       }}> 
          <div>
              <p>{details.name}</p>
              <p>{details.email}</p>
              {toggle && <p>contact Number:{details.number}</p>}
          </div>
       </div>
       )
}

export default ContactCard