import LOGO from './assets/icons8-redux.svg';
export default function Header() {
  return (
    // <!-- Navbar Starts -->
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a className="px-14" href="/">
          <img className="h-[45px]" src={LOGO} alt="Lws" />
          <p className="text-amber-50">LOGO</p>
        </a>

        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
    // <!-- Navbar Ends -->
  );
}
