import React from "react"

const Square = ({board, handleClick}) => {

  return (
    <>
      <div className="grid"> 
      {board.map((square, index) => {
        return(
          <div 
            className="square"
            key={index}
            onClick={() => handleClick(index)} 
          >
            {square}
          </div>
          )
        })}
        </div>
    </>
  )
}
export default Square
