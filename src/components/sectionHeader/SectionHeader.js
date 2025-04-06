import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SectionHeader = ({ title, linkName }) => {
  return (
    <header className="bg-[#D7FDEC] w-full h-40 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          {/* Left side content */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-[#2d2517] text-2xl sm:text-3xl lg:text-4xl  font-semibold">
              {title}
            </h1>
            <nav className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
              <span>
                <HomeIcon size={20} strokeWidth={1.5} />
              </span>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-blue-600 hover:text-blue-700 transition-colors">
                {linkName}
              </span>
            </nav>
          </div>

          {/* Right side illustration */}
          <div className="relative w-48 h-32">
            <Image
              width={500}
              height={500}
              src="/images/bg-header.png"
              alt="Online Shopping Illustration - E-commerce Header Background"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
