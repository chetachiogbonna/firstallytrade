import { Link } from "react-router-dom"
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
      <DropdownMenuTrigger className="font-semibold hover:text-[#1B4DE7] duration-100">{navLink.label}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#212B42] border-none p-4">
        {
          navLink.link.map(navLink => {
            return (
              <DropdownMenuItem className="text-white">
                <Link to={navLink.innerLink} className="text-[16px] font-semibold hover:text-[#1B4DE7] duration-100">
                  {navLink.innerLabel}
                </Link>
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Header() {
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
            <ul className="flex items-center gap-10">
              {
                topNavLinks.map(navLink => {
                  return Array.isArray(navLink.link)
                    ? (
                      <DropDown navLink={navLink} />
                    ): (
                      <li className="font-semibold hover:text-[#1B4DE7] duration-100">
                        <Link key={navLink.label} to={navLink.link}>
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
          <button className="bg-[#1B4DE7] text-lg font-bold py-4 px-10 rounded-lg shadow-md shadow-blue-950">Log in</button>
        </div>
      </nav>
    </header>
  )
}

export default Header