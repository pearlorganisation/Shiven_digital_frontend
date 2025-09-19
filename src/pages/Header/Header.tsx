

function Header() {
  return (
   <header className="w-full bg-white shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="/ShivenLogo.png"
        alt="Shiven Technology Logo"
        className="h-10 w-auto"
      />
      {/* Optional: add text next to logo if needed */}
      {/* <span className="text-xl font-bold text-blue-600">SHIVEN <span className="font-normal text-gray-600">Technology</span></span> */}
    </div>

    {/* Right Side - Login Button */}
    <p className="px-5 py-2 font-bold  text-gray-900 rounded-md hover:text-blue-700 transition">
      Grow Your Business Online
    </p>
  </div>
</header>

  )
}

export default Header