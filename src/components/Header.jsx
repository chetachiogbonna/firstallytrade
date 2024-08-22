import { Link, useNavigate } from "react-router-dom"
import { topNavLinks } from "../constants"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropDown({ navLink }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-semibold hover:text-[#1B4DE7] duration-100 focus:outline-none text-nowrap px-2">
        {navLink.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#212B42] border-none p-4">
        {
          navLink.link.map((navLink, index) => {
            return (
              <Link key={index} to={navLink.innerLink}>
                <DropdownMenuItem  className="text-white text-[0.5rem] font-semibold hover:text-[#1B4DE7] duration-100 hover:cursor-pointer">
                  {navLink.innerLabel}
                </DropdownMenuItem>
              </Link>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Header() {
  const navigate = useNavigate()

  return (
    <header className="bg-black px-8 py-4 border-b border-b-gray-900">
      <nav className="flex items-center">
        <div className="mr-auto flex items-center gap-5">
          <div>
            <Link to="/">
              <img 
                src="/assets/images/logo.png" 
                alt="logo" 
                width={150}
                height={150}
              />
            </Link>
          </div>

          <div>
            <ul className="flex justify-around items-center">
              {
                topNavLinks.map(navLink => {
                  return Array.isArray(navLink.link)
                    ? (
                      <DropDown key={navLink.label} navLink={navLink} />
                    ): (
                      <li key={navLink.label} className="font-semibold hover:text-[#1B4DE7] duration-100 px-2">
                        <Link to={navLink.link} className="text-nowrap">
                          {navLink.label}
                        </Link>
                      </li>
                    )
                })
              }
            </ul>
          </div>
        </div>

        <div>
          <button 
            className="bg-[#1B4DE7] hover:bg-[#4F7FD3] text-lg font-bold py-4 px-10 rounded-lg shadow-md shadow-blue-950 text-nowrap"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header