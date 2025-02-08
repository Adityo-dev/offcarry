import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#D7FDEC] w-full px-6 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left side content */}
          <div className="space-y-4">
            <h1 className="text-[#2d2517] text-4xl font-bold">
              TrustNest Shop
            </h1>
            <nav className="flex items-center gap-2 text-gray-600">
              <span>
                <HomeIcon />
              </span>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <a
                href="/shop"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Shop
              </a>
            </nav>
          </div>

          {/* Right side illustration */}
          <div className="relative w-48 h-32">
            <Image
              width={500}
              height={500}
              src="/images/bg-header.png"
              alt="Shopping illustration"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
