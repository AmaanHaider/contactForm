import React from 'react'

function Button(props) {
  return (
    <button style={{
        color: props.color,
        background: props.backCol
    }}  onClick={props.handleClick} >{props.title}</button>
  )
}

export default Button