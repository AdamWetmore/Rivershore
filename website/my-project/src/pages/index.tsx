import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import FacebookLogo from '../../public/facebook-logo.png';
import InstagramLogo from '../../public/instagram-logo.png';
import Arrow from '../../public/arrow.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Riverhore Aquariums</title>
      </Head>
      <div className='my-8'>
        <section id='hero'>
          <div
            id='main-lockup'
            className='content-wrapper z-5 my-32 h-80 text-left'
          >
            <h1 className='my-4'>
              Welcome to<div>Rivershore Aquariums</div>
            </h1>
            <div className='my-4 max-w-md'>
              The Twin-Cities&apos; Local Fish Store. Specializing in aquatic
              plants, tropical fish, aquascaping, and aquarium supplies.
            </div>
            <Link href='/#find-us'>
              <div className='btn-primary'>Find Us</div>
            </Link>
          </div>
        </section>
        <section id='secondary-ctas'>
          <div className='mx-0 w-screen bg-black py-10'>
            <div className='content-wrapper flex justify-between'>
              <div className='my-2 flex w-[33%] flex-col justify-center rounded-lg bg-white p-4 text-left'>
                <h2>New to the hobby?</h2>
                <div className='my-2'>Check out our basic startup guide</div>
                <Link href='/help#startup-guide'>
                  <div className='btn-primary my-2'>Get Started</div>
                </Link>
              </div>
              <div className='my-2 flex w-[33%] flex-col justify-center rounded-lg bg-white p-4 text-right'>
                <h2>Gift Certificates Available!</h2>
                <div className='my-2'>
                  Gift wrap fish or aquarium supplies with a Rivershore gift
                  card
                </div>
                <div className='flex justify-end'>
                  <Link href='/shop'>
                    <div className='btn-primary my-2'>Shop</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='find-us'>
          <div className='content-wrapper py-10'>
            <div className='flex items-start justify-center gap-24'>
              <div className='my-2 rounded-lg bg-black p-48 text-center text-white'>
                Map
              </div>
              <div className='my-24 flex flex-col items-start gap-10'>
                <div>
                  <h2>Stop in today</h2>
                  <div>6015 Lyndale Ave. S.</div>
                  <div>Minneapolis, MN 55419</div>
                </div>
                <div>
                  <h2>Hours</h2>
                  <div>11am-7pm Daily</div>
                  <div>Closed Tuesday</div>
                </div>
              </div>
              <div className='my-24 flex flex-col gap-10'>
                <div>
                  <h2>Call Us</h2>
                  <a href='tel:612-315-3946' className='hover:underline'>
                    612-315-3946
                  </a>
                </div>
                <div>
                  <h2>Follow Us</h2>
                  <div className='flex items-center justify-between'>
                    <div id='instagram'>
                      <Link
                        target='_blank'
                        href='https://www.instagram.com/rivershoreaquariums/'
                      >
                        <Image
                          src={InstagramLogo}
                          alt='instagram logo'
                          className='hover-clickable mr-4 h-8 min-h-[29px] w-8 min-w-[29px]'
                        />
                      </Link>
                    </div>
                    <div id='facebook'>
                      <Link
                        target='_blank'
                        href='https://www.facebook.com/rivershoreaquariums'
                      >
                        <Image
                          src={FacebookLogo}
                          alt='instagram logo'
                          className='hover-clickable m-4 h-8 min-h-[29px] w-8 min-w-[29px]'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='our-team-cta'>
          <div className='content-wrapper my-10 flex items-center justify-center gap-10'>
            <div id='derek-headshot'>
              <div className='my-2 h-64 w-48 rounded-lg bg-black text-center text-white'></div>
              <div className='m-2 text-center'>Derek</div>
            </div>
            <div id='dan-headshot'>
              <div className='my-2 h-64 w-48 rounded-lg bg-black text-center text-white'></div>
              <div className='m-2 text-center'>Dan</div>
            </div>
            <div className='flex flex-col items-center'>
              <h2>Meet Our Team</h2>
              <Link href='/team'>
                <Image
                  src={Arrow}
                  alt='go to team page'
                  className='hover-clickable m-2 h-8 w-8'
                ></Image>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
