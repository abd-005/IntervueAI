import { Menu } from "lucide-react"

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 text-foreground backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <h2 className="text-xl font-bold">
          IntervueAI
        </h2>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-lg px-4 py-2">
            Login
          </button>

          <button className="rounded-lg px-4 py-2 bg-black text-white">
            Get Started
          </button>
        </div>

      </nav>
    </header>
  )
}
