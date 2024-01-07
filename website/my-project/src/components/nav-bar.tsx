import Link from 'next/link';
import Image from 'next/image';
import RivershoreLogo from '../../public/rivershore-logo.png';

function NavBar() {
  return (
    <>
      <div
        id='nav-bar-container'
        className='sticky top-0 z-10 bg-white py-2 shadow-lg'
      >
        <div className='content-wrapper flex flex-col items-center md:flex-row'>
          <div id='logo' className='mx-8 flex justify-start'>
            <Link href='/'>
              <Image
                src={RivershoreLogo}
                alt='rivershore aquariums logo'
                className='hover-clickable mb-2 h-32 w-32'
              />
            </Link>
          </div>
          <div id='nav-links' className='flex justify-between'>
            <Link href='/'>
              <div className='nav-link'>Home</div>
            </Link>
            <Link href='/shop'>
              <div className='nav-link'>Shop</div>
            </Link>
            <Link href='/team'>
              <div className='nav-link'>Team</div>
            </Link>
            <div className='nav-link group relative'>
              <Link href='/help'>
                <div className='flex items-center'>
                  <div>Help</div>
                  <div className='mx-2 rotate-90 transform transition-transform duration-300 group-hover:-rotate-90'>
                    &#8250;
                  </div>
                </div>
              </Link>
              <div className='absolute left-0 hidden flex-col rounded-lg bg-black p-4 shadow-2xl group-hover:flex'>
                <Link href='/help#faq' className='hover:underline'>
                  FAQ
                </Link>
                <Link
                  className='whitespace-nowrap hover:underline'
                  href='/help#startup-guide'
                >
                  Aquarium Startup Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
