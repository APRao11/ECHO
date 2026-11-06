import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ECHO | Discover Dakshina Kannada",
  description:
    "Discover the places, people, culture and stories of Dakshina Kannada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F7F3EA] text-[#292C29]">
        <Navbar />

        {children}

        <footer className="bg-[#183B4E] text-[#F7F3EA] mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10 text-center">

            <h2 className="font-serif text-2xl font-bold">
              ECHO
            </h2>

            <p className="text-sm text-[#D9BE91] mt-2">
              Discover the stories behind every place.
            </p>

            <p className="text-xs text-gray-300 mt-6">
              © 2026 ECHO. All rights reserved.
            </p>

          </div>
        </footer>
      </body>
    </html>
  );
}