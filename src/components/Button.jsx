const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${ backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red" } rounded-full ${fullWidth && "w-full"}`}
    >
      {/* For above, If backgroundColor is true, then use the backgroundColor, textColor, and borderColor that was passed in, else use the default values */}
      
      {label}

      {/* We can only render the image if there is actually one to render, else dont show it */}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;