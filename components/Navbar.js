
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#244C50] border-b border-[#D9BE91]/40">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          {/* Logo Image */}
          <div className="w-17 h-17 rounded-full overflow-hidden  bg-[#F7F3EA]">
            <img
              src="/images/echo-logo.png"
              alt="ECHO logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="font-[Cinzel] text-2xl font-bold text-[#F7F3EA] tracking-[3px]">
              ECHO
            </h1>

            <p className="text-[10px] tracking-[3px] text-[#D9BE91] uppercase">
              Stories of the Coast
            </p>
          </div>

        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-7 text-sm font-medium">

          <Link
            href="/"
            className="text-[11px] tracking-[2px] uppercase text-[#F7F3EA] hover:text-[#D9BE91] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-[11px] tracking-[2px] uppercase text-[#F7F3EA] hover:text-[#D9BE91] transition-colors"
          >
            Explore
          </Link>

          <Link
            href="/saved"
            className="text-[11px] tracking-[2px] uppercase text-[#F7F3EA] hover:text-[#D9BE91] transition-colors"
          >
            Saved Places
          </Link>

        </div>

      </nav>
    </header>
  );
}
