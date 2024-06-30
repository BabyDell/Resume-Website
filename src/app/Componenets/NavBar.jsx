
export default function NavBar() {
  return (
    <nav className="bg-gray-800 fixed w-dvw">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            {/* image */}
            </div>
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#Home"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#About"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  About
                </a>
                <a
                  href="#Projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Projects
                </a>
                <a
                  href="#Contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
