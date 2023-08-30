import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
        src={imgURL}
        alt={name}
        className='w-[280px] h-[280px]'
      />

      <div>
        <img 
          src={star}
          alt='Star Rating'
          width={24}
          height={24}
        />

        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          (4.4)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>

      <p className="mt-2 leading-normal text-2xl font-semibold font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard