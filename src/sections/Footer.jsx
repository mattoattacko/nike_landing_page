import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className=''>
        {/* Nike logo */}
        <div className=''>
          <a href='/'>
            <img 
              src={footerLogo}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer



// '<footer>' is an html5 semantic tag