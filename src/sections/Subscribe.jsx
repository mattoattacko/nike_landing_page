import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Get the Latest 
        <span className="text-coral-red"> Updates 
        </span> & Newsletter
      </h3>

      {/* lg:max-w-[40%] = on large devices, take up 40% of the screen. */}
      <div className="flex w-full items-center gap-5 p-2.5 rounded sm:border sm:border-slate-gray max-sm:flex-col lg:max-w-[40%]"> 
        <input 
          type="text" 
          placeholder="subscribe@nike.com" 
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button 
            label="Subscribe" 
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe