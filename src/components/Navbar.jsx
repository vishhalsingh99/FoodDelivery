export const Navbar = () => {
  return (
    <div className="header flex justify-between items-center px-6 py-4 bg-black shadow-md sticky top-0 z-50">
  {/* Logo */}
  <div className="logo-container flex items-center gap-2">
    <img
      className="logo w-12 h-12 object-cover rounded-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOvjazQo3iSjjvTzg4pOV0bJnozGGyUMylw&s"
      alt="logo"
    />
    <span className="text-xl font-bold text-white">Foodiez</span>
  </div>

  {/* Navigation */}
  <div className="nav-items">
    <ul className="flex gap-6 text-gray-300 font-medium text-md">
      <li className="hover:text-white cursor-pointer transition-colors">Home</li>
      <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
      <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
      <li className="hover:text-white cursor-pointer transition-colors">Cart</li>
    </ul>
  </div>
</div>

    
  )
}