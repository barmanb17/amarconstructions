"use client";

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ]

  const servicesItems = [
    { name: "Residential", link: "/services/residential" },
    { name: "Commercial", link: "/services/commercial" },
    { name: "Industrial", link: "/services/industrial" },
    { name: "Renovation", link: "/services/renovation" },
    { name: "Consulting", link: "/services/consulting" },
  ]

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className="py-4">
      <Link href="/" className="flex flex-row items-center gap-3 text-xl font-bold">
      <img src="/amarlogo.jpg" alt="Logo" className="w-15 h-10 rounded-lg" />
      <div>Amar Constructions</div>
      </Link>


        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary" href="/contact">
            Login
          </NavbarButton>
          <NavbarButton variant="dark" href="/contact">
            Get a Quote
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="py-4">
        <MobileNavHeader>
        <Link href="/" className="flex flex-row items-center  text-lg font-bold">
      <img src="/logo.png" alt="Logo" className="w-12 h-10 rounded-lg" />
      
      </Link>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} className="h-[80vh]"> {/* Increase the height here */}
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 w-full py-2"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
              Login
            </NavbarButton>
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="dark" className="w-full bg-black">
              Get a Quote
              
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

export default NavbarComponent
