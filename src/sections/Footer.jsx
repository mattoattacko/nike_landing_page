import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex flex-wrap justify-between items-start gap-20 max-lg:flex-col'>
        {/* Nike logo */}
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img 
              src={footerLogo}
            />
          </a>

          <p className='mt-6 text-base leading-7 text-white-400 font-montserrat sm:max-w-sm'>
            Get dem grippers ready for the new year at your nearest Nike store. Find your perfect size and earn rewards!
          </p>
          
          <div className='flex items-center gap-5 mt-8'>
            {/* go over all the social media icons and render each */}
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full' key={icon.id}>
                <img                  
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        {/* products and help */}
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                    <a>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}          
        </div>
      </div>

      {/* very bottom text */}
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          {/* copyright symbol */}
          <img 
            src={copyrightSign}
            alt='copywrite sign'
            width={20}
            height={20}
            className="rounder-full m-0"
          />

          <p>
            2021 Nike, Inc. All Rights Reserved
          </p>
        </div>

        <p className="font-montserrat cursor-pointer">
          Terms and Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer



// '<footer>' is an html5 semantic tag