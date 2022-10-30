import React from 'react'

const ButtonLogo = ({
  text,
  iconName,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
      type="button"
    >
      <img
        alt="..."
        className="w-5 mr-1"
        src={require(`../../../assets/img/${iconName}`).default}
      />
      {text}
    </button>
  )
}

export default ButtonLogo