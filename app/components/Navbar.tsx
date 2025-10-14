import Link from "next/link";
import { aboutMe } from "../lib/data";

export default function Navbar() {
  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto max-w-4xl px-8 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
          {aboutMe.name.split(" ")[0]} {/* Solo el primer nombre */}
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
}
