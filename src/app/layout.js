import MainNavigationBar from "@/components/shared/navigationBar/MainNavigationBar";
import { Geist, Geist_Mono, Krub } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import { AddressProvider } from "@/components/contextApi/context/AddressContext";
import { CartProvider } from "@/components/contextApi/context/CartContext";
import { WishlistProvider } from "@/components/contextApi/context/WishlistContext";
// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { ChatButton } from "@/components/bot/chat-button";

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "off carry",
  description:
    "Discover a seamless shopping experience with Off Carry. Explore top-quality products, exclusive deals, and fast delivery. Shop now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${krub.variable} antialiased mainContainer overflow-x-auto`}
      >
        <SessionProvider>
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
        </SessionProvider>
        {/* <ChatButton /> */}
      </body>
    </html>
  );
}
