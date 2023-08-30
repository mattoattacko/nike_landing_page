const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  // Need this to figure out if the current image is the bigShoeImage
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      // if the current image is the bigShoeImage, then add a border. Thus we need to change the styles dynamically to add or remove the border
      // with "imgURL.bigShoe", the URL itself is an object containing the bigShoe which is the final part of the URL
      className={`border-2 rounded-xl 
      ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;