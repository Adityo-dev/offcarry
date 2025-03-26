import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";
import { Geist, Geist_Mono, Krub } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import { AddressProvider } from "@/components/contextApi/context/AddressContext";
import { CartProvider } from "@/components/contextApi/context/CartContext";
import { WishlistProvider } from "@/components/contextApi/context/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

// Structured Data for E-commerce
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OffCarry",
  "url": "https://offcarry.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://offcarry.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  "description": "OffCarry - Bangladesh's trusted online store for premium daily essentials with fast delivery.",
};

// Metadata configuration
export const metadata = {
  metadataBase: new URL("https://offcarry.com"),
  title: "OffCarry - Your trusted partner for life!",
  description:
    "Shop at OffCarry, Bangladesh’s leading online store for premium daily essentials. Enjoy top-quality products, unbeatable prices, and fast delivery to Dhaka, Chittagong, Sylhet, and beyond. Your trusted partner for life!",
  image: "/images/offcarry.png",
  url: "https://offcarry.com",
  type: "website",
  siteName: "OffCarry",
  twitterUsername: "@offcarry",
  keywords:
    "OffCarry, online shopping Bangladesh, daily essentials Bangladesh, best online store Bangladesh, OffCarry Dhaka, OffCarry Chittagong, OffCarry Sylhet, OffCarry Rajshahi, OffCarry Khulna, OffCarry Kushtia, e-commerce Bangladesh, trusted shopping Bangladesh, quality daily products, OffCarry delivery, affordable essentials Bangladesh, Off carry, off carry, offcarry, mustafizur shop, mustafizur off carry, mustafizur offcarry, sifat off carry carry, sifat offcarry, sifat offcarry, sifat shop, sifat shop, sifat online shop, sifat online store, aditto offcarry, aditto off carry, aditto store, aditto shop, best clothing product in bd, best design t-shart, best tshart,",
  alternates: {
    canonical: "https://offcarry.com",
  },
  openGraph: {
    title: "OffCarry - Best Online Shopping in Bangladesh",
    description:
      "Explore OffCarry for premium daily essentials at unbeatable prices. Fast delivery across Bangladesh – shop with trust and convenience!",
    url: "https://offcarry.com",
    siteName: "OffCarry",
    images: [
      {
        url: "/images/offcarry.png",
        width: 1200,
        height: 630,
        alt: "OffCarry - Bangladeshs Leading Online Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OffCarry - Your trusted partner for life!",
    description:
      "Shop premium daily essentials at Off Carry with fast delivery across Bangladesh. Quality, trust, and value – all in one place!",
    image: "/images/offcarry.png",
    handle: "@offcarry",
    site: "@offcarry",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport configuration
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff", // Moved from metadata to here
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={` ${krub.variable} antialiased mainContainer overflow-x-auto`}
      >
        <AddressProvider>
          <CartProvider>
            <WishlistProvider>
              <MainNavigationBar />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </AddressProvider>
        <ToastContainer />
      </body>
    </html>
  );
}