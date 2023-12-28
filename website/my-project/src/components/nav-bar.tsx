import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <>
      <div id='nav-bar container' className="sticky top-0 bg-white shadow-2xl py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div id="logo" className="flex justify-start mx-8">
            <Link href="/">
              <Image src="/rivershore-logo.png" alt="rivershore logo" className="w-32 h-auto"/>
            </Link>
          </div>
          <div id="nav-links" className="flex justify-end mx-8">
            <div className="mx-4">
              <Link href="/">Home</Link>
            </div>
            <div className="mx-4">
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;